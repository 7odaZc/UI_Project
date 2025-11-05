// MoneyStraight - Accounts CRUD + Search (with localStorage persistence)

(function () {
  // ---- DOM ----
  const $ = (sel) => document.querySelector(sel);
  const accountsList = $("#accountsList");
  const addBtn = $("#addAccountBtn");
  const searchInput = $("#searchInput");

  // ---- Storage helpers ----
  const STORAGE_KEY = "moneystraight.accounts.v1";

  function loadAccounts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    // Seed data if nothing stored yet
    return [
      {
        id: crypto.randomUUID(),
        name: "Chase Checking",
        subtype: "Checking ...1234",
        balance: 12450.78,
        logoClass: "logo-chase",
        type: "bank",
      },
      {
        id: crypto.randomUUID(),
        name: "Amex Gold Card",
        subtype: "Credit Card ...5678",
        balance: -1234.56,
        logoClass: "logo-amex",
        type: "card",
      },
      {
        id: crypto.randomUUID(),
        name: "BofA Savings",
        subtype: "Savings ...9012",
        balance: 58210.0,
        logoClass: "logo-bofa",
        type: "bank",
      },
      {
        id: crypto.randomUUID(),
        name: "Fidelity Roth IRA",
        subtype: "Investment",
        balance: 25678.9,
        logoClass: "logo-fidelity",
        type: "investment",
      },
    ];
  }

  function saveAccounts() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
    } catch {}
  }

  // ---- State ----
  let accounts = loadAccounts();

  // ---- Utilities ----
  function formatCurrency(n) {
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      }).format(n);
    } catch {
      const val = Number.isFinite(+n) ? +n : 0;
      return `$${val.toFixed(2)}`;
    }
  }

  // ---- READ ----
  function renderAccounts(filter = "") {
    const q = filter.trim().toLowerCase();
    const data = q
      ? accounts.filter(
          (a) =>
            a.name.toLowerCase().includes(q) ||
            a.subtype.toLowerCase().includes(q) ||
            a.type.toLowerCase().includes(q)
        )
      : accounts;

    accountsList.innerHTML = "";

    if (data.length === 0) {
      const empty = document.createElement("div");
      empty.className =
        "rounded-lg border border-dashed border-white/10 text-[#96c5a9] p-6 text-center";
      empty.textContent = "No accounts match your search.";
      accountsList.appendChild(empty);
      return;
    }

    data.forEach((acc) => {
      const isNeg = acc.balance < 0;
      const item = document.createElement("div");
      item.className =
        "flex items-center gap-4 bg-[#1a3325] hover:bg-[#264532] transition-colors duration-200 px-4 min-h-[72px] py-3 justify-between rounded-lg";

      item.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-white logo-tile rounded-lg size-12 p-2 ${acc.logoClass || ""}" data-alt="${acc.name} Logo"></div>
          <div class="flex flex-col justify-center">
            <p class="text-white text-base font-medium leading-normal line-clamp-1">${acc.name}</p>
            <p class="text-[#96c5a9] text-sm font-normal leading-normal line-clamp-2">${acc.subtype}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-4">
          <p class="${isNeg ? "text-red-400" : "text-white"} text-lg font-medium leading-normal">
            ${formatCurrency(acc.balance)}
          </p>
          <button class="text-white/70 hover:text-white px-2 py-1 rounded-lg" data-edit="${acc.id}" title="Edit">
            <span class="material-symbols-outlined">edit</span>
          </button>
          <button class="text-white/70 hover:text-white px-2 py-1 rounded-lg" data-delete="${acc.id}" title="Delete">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      `;

      // Bind actions
      item.querySelector(`[data-edit="${acc.id}"]`).addEventListener("click", () => editFlow(acc.id));
      item.querySelector(`[data-delete="${acc.id}"]`).addEventListener("click", () => deleteFlow(acc.id));

      accountsList.appendChild(item);
    });
  }

  // ---- CREATE ----
  function addAccount(payload) {
    const record = { id: crypto.randomUUID(), ...payload };
    accounts.unshift(record);
    saveAccounts();
    renderAccounts(searchInput.value);
  }

  // ---- UPDATE ----
  function updateAccount(id, fields) {
    accounts = accounts.map((a) => (a.id === id ? { ...a, ...fields } : a));
    saveAccounts();
    renderAccounts(searchInput.value);
  }

  // ---- DELETE ----
  function deleteAccount(id) {
    accounts = accounts.filter((a) => a.id !== id);
    saveAccounts();
    renderAccounts(searchInput.value);
  }

  // ---- Simple prompt-based flows (swap for a modal later if you like) ----
  function addFlow() {
    const name = prompt("Account name (e.g., Chase Checking):");
    if (!name) return;

    const subtype = prompt("Subtype/Mask (e.g., Checking ...1234):") || "";
    const type = prompt("Type (bank | card | investment):", "bank") || "bank";
    const balance = parseFloat(prompt("Balance (number):", "0") || "0");
    const logoClass =
      prompt("Logo class (logo-chase | logo-amex | logo-bofa | logo-fidelity):", "logo-chase") ||
      "logo-chase";

    addAccount({
      name,
      subtype,
      type,
      balance: Number.isFinite(balance) ? balance : 0,
      logoClass,
    });
  }

  function editFlow(id) {
    const acc = accounts.find((a) => a.id === id);
    if (!acc) return;

    const name = prompt("Account name:", acc.name);
    if (name === null) return;

    const subtype = prompt("Subtype/Mask:", acc.subtype);
    if (subtype === null) return;

    const type = prompt("Type (bank | card | investment):", acc.type);
    if (type === null) return;

    const balanceStr = prompt("Balance (number):", String(acc.balance));
    if (balanceStr === null) return;
    const balanceNum = parseFloat(balanceStr);

    const logoClass = prompt(
      "Logo class (logo-chase | logo-amex | logo-bofa | logo-fidelity):",
      acc.logoClass
    );
    if (logoClass === null) return;

    updateAccount(id, {
      name: name.trim() || acc.name,
      subtype: subtype.trim() || acc.subtype,
      type: (type.trim() || acc.type).toLowerCase(),
      balance: Number.isFinite(balanceNum) ? balanceNum : acc.balance,
      logoClass: logoClass.trim() || acc.logoClass,
    });
  }

  function deleteFlow(id) {
    const acc = accounts.find((a) => a.id === id);
    if (!acc) return;
    if (confirm(`Delete "${acc.name}"? This cannot be undone.`)) {
      deleteAccount(id);
    }
  }

  // ---- Events ----
  if (addBtn) addBtn.addEventListener("click", addFlow);
  if (searchInput) searchInput.addEventListener("input", (e) => renderAccounts(e.target.value));

  // ---- Boot ----
  renderAccounts();
})();
