import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Transactions() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const transactions = [
    {
      id: 1,
      date: "Oct 26, 2023",
      type: "Expense",
      category: "Groceries",
      description: "Weekly grocery shopping",
      amount: "-$72.5",
    },
    {
      id: 2,
      date: "Oct 25, 2023",
      type: "Income",
      category: "Salary",
      description: "Bi-weekly salary deposit",
      amount: "+$2500",
    },
    {
      id: 3,
      date: "Oct 24, 2023",
      type: "Expense",
      category: "Transport",
      description: "Monthly transit pass",
      amount: "-$25",
    },
    {
      id: 4,
      date: "Oct 22, 2023",
      type: "Expense",
      category: "Dining",
      description: "Dinner with friends",
      amount: "-$45.8",
    },
    {
      id: 5,
      date: "Oct 20, 2023",
      type: "Expense",
      category: "Utilities",
      description: "Electricity bill",
      amount: "-$112.3",
    },
  ];

  /* -------- SIDEBAR COMPONENT -------- */
  const Sidebar = () => (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#0c3327] text-white shadow-xl md:translate-x-0 z-[999]">
      <div className="p-6 flex items-center justify-center md:justify-start">
        <img src="/Logo.png" className="h-10" alt="logo" />
      </div>

      <nav className="px-4 space-y-2">
        <button onClick={() => navigate("/")} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 w-full">
          <span className="material-symbols-outlined">dashboard</span> Dashboard
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#49B784]/40 w-full font-bold">
          <span className="material-symbols-outlined">receipt_long</span> Transactions
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 w-full">
          <span className="material-symbols-outlined">account_balance</span> Accounts
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 w-full">
          <span className="material-symbols-outlined">category</span> Categories
        </button>
      </nav>

      <div className="mt-auto p-4">
        <button onClick={() => navigate("/settings")} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 w-full">
          <span className="material-symbols-outlined">settings</span> Settings
        </button>

        <button onClick={() => navigate("/login")} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 w-full mt-2">
          <span className="material-symbols-outlined">logout</span> Logout
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen flex bg-[#082D23]">

      {/* Sidebar */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 min-h-screen text-[#BDEED0] p-10 md:ml-64">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Transactions</h1>

          <div className="bg-[#0F3A2E] border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#BDEED0] border-b border-white/10">
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Description</th>
                  <th className="py-4 px-6">Amount</th>
                  <th className="py-4 px-6">Actions</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="py-4 px-6">{t.date}</td>
                    <td className="py-4 px-6">{t.type}</td>
                    <td className="py-4 px-6">{t.category}</td>
                    <td className="py-4 px-6">{t.description}</td>
                    <td className="py-4 px-6">{t.amount}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => navigate(`/transactions/${t.id}`)}
                        className="text-[#49B784] underline"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
