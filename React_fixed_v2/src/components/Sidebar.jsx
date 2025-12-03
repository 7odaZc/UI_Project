import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#022a26] text-white p-6">
      <h1 className="text-3xl font-bold mb-10">Money$tr∞</h1>

      <ul className="space-y-6">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}
