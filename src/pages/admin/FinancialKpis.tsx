import { DollarSign, TrendingUp, Percent, CreditCard } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import KpiCard from "@/components/admin/KpiCard";
import { financials, monthlyFinancials } from "@/data/mockAdminData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fmt = (n: number) => `$${n.toLocaleString()}`;

const expenseBreakdown = [
  { name: "Ad Spend", value: 5200, color: "hsl(213,57%,46%)" },
  { name: "Payroll", value: 9800, color: "hsl(193,70%,50%)" },
  { name: "Tools & Software", value: 1400, color: "hsl(142,71%,45%)" },
  { name: "Miscellaneous", value: 1800, color: "hsl(45,93%,47%)" },
];

const FinancialKpis = () => {
  const [simClients, setSimClients] = useState(10);
  const avgRevPerClient = financials.mrr / 187;
  const simulatedMrr = financials.mrr + simClients * avgRevPerClient;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Total Revenue" value={fmt(financials.totalRevenue)} icon={DollarSign} change={12.4} />
        <KpiCard title="MRR" value={fmt(financials.mrr)} icon={TrendingUp} change={12.5} />
        <KpiCard title="Total Expenses" value={fmt(financials.expenses)} icon={CreditCard} change={5.8} />
        <KpiCard title="Profit Margin" value={`${financials.profitMargin}%`} icon={Percent} change={2.1} />
      </div>

      {/* Revenue vs expenses chart */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Revenue vs Expenses</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyFinancials}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
              <XAxis dataKey="month" stroke="hsl(0,0%,40%)" fontSize={12} />
              <YAxis stroke="hsl(0,0%,40%)" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => [fmt(v)]} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(213,57%,46%)" fill="hsl(213,57%,46%)" fillOpacity={0.15} strokeWidth={2} name="Revenue" />
              <Area type="monotone" dataKey="expenses" stroke="hsl(0,84%,60%)" fill="hsl(0,84%,60%)" fillOpacity={0.1} strokeWidth={2} name="Expenses" />
              <Area type="monotone" dataKey="profit" stroke="hsl(142,71%,45%)" fill="hsl(142,71%,45%)" fillOpacity={0.1} strokeWidth={2} name="Profit" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Expense breakdown */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Expense Breakdown</h3>
          <div className="h-56 flex items-center">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie data={expenseBreakdown} dataKey="value" cx="50%" cy="50%" outerRadius={70} strokeWidth={0}>
                  {expenseBreakdown.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => [fmt(v)]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {expenseBreakdown.map((e) => (
                <div key={e.name} className="flex items-center gap-2 text-xs">
                  <div className="h-3 w-3 rounded-sm" style={{ background: e.color }} />
                  <span className="text-muted-foreground">{e.name}</span>
                  <span className="font-medium text-foreground">{fmt(e.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Forecasting simulator */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Revenue Forecast Simulator</h3>
          <p className="text-xs text-muted-foreground">If you acquire additional clients via IG Ads:</p>
          <div className="flex items-center gap-3">
            <Input
              type="number"
              value={simClients}
              onChange={(e) => setSimClients(Number(e.target.value))}
              className="w-24"
              min={0}
            />
            <span className="text-sm text-muted-foreground">new clients</span>
          </div>
          <div className="rounded-lg border border-border p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Current MRR</span>
              <span className="font-semibold text-foreground">{fmt(financials.mrr)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Added Revenue</span>
              <span className="font-semibold text-green-400">+{fmt(Math.round(simClients * avgRevPerClient))}</span>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Projected MRR</span>
              <span className="font-bold text-primary text-lg">{fmt(Math.round(simulatedMrr))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialKpis;
