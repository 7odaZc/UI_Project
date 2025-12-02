import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  /* -------------------- DATA -------------------- */
  const pieData = [
    { name: "Food", value: 400 },
    { name: "Shopping", value: 300 },
    { name: "Transport", value: 300 },
    { name: "Bills", value: 200 },
  ];

  const COLORS = ["#49B784", "#35A078", "#2D8C67", "#1E5E4A"];

  const barData = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 600 },
    { month: "Mar", value: 300 },
    { month: "Apr", value: 800 },
  ];

  const axisColor = "#BDEED0";
  const tooltipBg = "#0F3A2E";
  const tooltipText = "#BDEED0";

  /* -------------------- SIDEBAR CLOSE -------------------- */
  const closeSidebar = () => setOpen(false);

  /* -------------------- NAV COMPONENT -------------------- */
  const NavItem = ({ icon, label, to }) => {
    const isActive = window.location.pathname === to;

    return (
      <button
        onClick={() => {
          navigate(to);
          setOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition 
        ${
          isActive
            ? "bg-[#49B784]/40 text-white font-bold"
            : "hover:bg-white/10 text-white"
        }`}
      >
        <span className="material-symbols-outlined">{icon}</span>
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen flex bg-[#082D23]">

      {/* ---------- MOBILE HAMBURGER ---------- */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-[9999] bg-white/10 p-2 rounded-lg border border-white/20 text-white"
      >
        <span className="material-symbols-outlined text-white">menu</span>
      </button>

      {/* ---------- OVERLAY ---------- */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 z-[9998] md:hidden"
        ></div>
      )}

      {/* ---------- SIDEBAR ---------- */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0c3327] text-white shadow-xl transform transition-all z-[9999]
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-center md:justify-start">
          <img src="/Logo.png" className="h-10" alt="logo" />
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-2">
          <NavItem icon="dashboard" label="Dashboard" to="/" />
          <NavItem icon="receipt_long" label="Transactions" to="/transactions" />
          <NavItem icon="account_balance" label="Accounts" to="/accounts" />
          <NavItem icon="category" label="Categories" to="/categories" />
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto p-4 md:p-6">
          <NavItem icon="settings" label="Settings" to="/settings" />

          <button
            onClick={() => {
              navigate("/login");
              setOpen(false);
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 w-full text-white mt-2"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="flex-1 min-h-screen text-[#BDEED0] p-6 md:p-10 md:ml-64">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Dashboard</h1>
              <p className="text-white/70 mt-1">
                Welcome back, here’s your financial overview.
              </p>
            </div>
            <button className="bg-[#49B784] px-4 py-2 rounded-lg flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined">add</span>
              New Transaction
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Card 1 */}
            <div className="bg-[#0F3A2E] p-6 rounded-xl border border-white/10">
              <div className="flex justify-between text-white/80">
                <span>Total Income</span>
                <span className="material-symbols-outlined text-[#49B784]">
                  arrow_upward
                </span>
              </div>
              <p className="text-3xl font-extrabold mt-2">$12,450.00</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0F3A2E] p-6 rounded-xl border border-white/10">
              <div className="flex justify-between text-white/80">
                <span>Total Expenses</span>
                <span className="material-symbols-outlined">arrow_downward</span>
              </div>
              <p className="text-3xl font-extrabold mt-2">$7,890.50</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0F3A2E] p-6 rounded-xl border border-white/10">
              <div className="flex justify-between text-white/80">
                <span>Balance</span>
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <p className="text-3xl font-extrabold mt-2">$4,559.50</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Pie Chart */}
            <div className="bg-[#0F3A2E] p-6 rounded-xl border border-white/10">
              <h3 className="font-bold mb-4">Expense Categories</h3>
              <div style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip
                      formatter={(value, name) => [`$${value}`, name]}
                      contentStyle={{
                        backgroundColor: tooltipBg,
                        border: "1px solid #1E5E4A",
                        borderRadius: "8px",
                        color: tooltipText,
                      }}
                    />
                    <Pie
                      data={pieData}
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="value"
                      paddingAngle={4}
                      label={({ name }) => name}
                      labelStyle={{ fill: axisColor }}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-[#0F3A2E] p-6 rounded-xl border border-white/10">
              <h3 className="font-bold mb-4">Monthly Overview</h3>
              <div style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <XAxis dataKey="month" stroke={axisColor} />

                    <Tooltip
                      formatter={(value) => [`$${value}`, "Value"]}
                      contentStyle={{
                        backgroundColor: tooltipBg,
                        border: "1px solid #1E5E4A",
                        borderRadius: "8px",
                        color: tooltipText,
                      }}
                    />

                    <Bar dataKey="value" fill="#49B784" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
