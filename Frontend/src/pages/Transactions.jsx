<<<<<<< HEAD:React_fixed_v2/src/pages/Transactions.jsx
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

=======
import React from "react";
import "../output.css";
export default function Transactions() {
  return (
    <div className="font-display bg-background-dark text-green-50 min-h-screen flex flex-col w-full overflow-x-hidden">

      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-green-600/50 px-6 md:px-10 lg:px-20 py-3 bg-green-700">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo 1.png"
            alt="Money$tr∞ Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-green-100 text-sm font-medium hover:text-primary" href="#">
            Dashboard
          </a>
          <a className="text-primary text-sm font-bold" href="#">
            Transactions
          </a>
          <a className="text-green-100 text-sm font-medium hover:text-primary" href="#">
            Reports
          </a>
          <a className="text-green-100 text-sm font-medium hover:text-primary" href="#">
            Settings
          </a>
        </nav>

        {/* Profile */}
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/a-/AOh14GjzQMn8g.png')",
          }}
        ></div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-6 md:px-10 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">

          {/* Back */}
          <button className="flex items-center gap-2 text-green-200 hover:text-primary text-sm font-medium w-fit">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to list
          </button>

          {/* Title */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h1 className="text-white text-4xl font-black tracking-tight">Transactions</h1>

            <button className="flex items-center gap-2 px-5 h-11 bg-primary hover:bg-green-500 text-white text-sm font-bold rounded-lg transition">
              <span className="material-symbols-outlined">add</span>
              Add New Transaction
            </button>
          </div>

          {/* Search/Filters */}
          <div className="flex flex-col md:flex-row gap-4 p-4 bg-green-700 rounded-xl border border-green-600/50">
            
            {/* Search */}
            <div className="flex-grow">
              <label className="flex w-full h-12">
                <div className="flex items-center justify-center bg-green-600 pl-4 rounded-l-lg border border-green-600 text-green-100">
                  <span className="material-symbols-outlined">search</span>
                </div>

                <input
                  type="text"
                  placeholder="Search by description..."
                  className="flex-1 bg-green-600 border border-green-600 text-white placeholder:text-green-100/70 rounded-r-lg pl-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {[
                "Date: Last 30 Days",
                "Type: All",
                "Category: All"
              ].map((label, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 h-12 px-4 bg-green-600 border border-green-600 hover:border-primary/50 rounded-lg transition"
                >
                  <p className="text-green-50 text-sm font-medium">{label}</p>
                  <span className="material-symbols-outlined text-green-100">
                    expand_more
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* TABLE */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-green-600/50 bg-green-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-green-600/50">
                  <tr>
                    {["Date", "Type", "Category", "Description", "Amount", "Actions"].map(
                      (h, i) => (
                        <th
                          key={i}
                          className={`px-6 py-4 text-${
                            i === 4 ? "right" : i === 5 ? "center" : "left"
                          } text-green-100 text-xs font-bold uppercase`}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>
                  {/* Example rows */}
                  {[...Array(5)].map((_, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`border-b border-green-600/50 hover:bg-green-600/40 ${
                        rowIndex === 4 ? "border-none" : ""
                      }`}
                    >
                      <td className="px-6 py-3 text-green-100 text-sm">Oct 26, 2023</td>

                      <td>
                        <span className="inline-block px-2.5 py-1 text-xs rounded-md bg-red-900/40 text-red-200 font-semibold">
                          Expense
                        </span>
                      </td>

                      <td className="px-6 py-3 text-green-100 text-sm">Groceries</td>
                      <td className="px-6 py-3 text-green-200 text-sm">Weekly grocery shopping</td>

                      <td className="px-6 py-3 text-right text-slate-300 text-sm font-medium">
                        -$72.50
                      </td>

                      <td className="px-6 py-3 text-center">
                        <button className="text-green-200 hover:text-primary mr-2">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="text-green-200 hover:text-red-400">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

                {/* Totals */}
                <tfoot>
                  <tr className="border-t-2 border-green-600 bg-green-700/80 font-bold">
                    <td
                      colSpan="4"
                      className="px-6 py-5 text-left text-green-100 uppercase"
                    >
                      Totals
                    </td>

                    <td className="px-6 py-5 text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-green-300">+$2,500.00</span>
                        <span className="text-slate-300">-$255.60</span>
                        <span className="text-green-100 mt-1 border-t border-green-500 pt-1">
                          +$2,244.40
                        </span>
                      </div>
                    </td>

                    <td></td>
                  </tr>
                </tfoot>

              </table>
            </div>
          </div>
>>>>>>> 9d9e56bdaa012ac02655c64db92913202e91d96e:Frontend/src/pages/Transactions.jsx
        </div>
      </main>
    </div>
  );
}
