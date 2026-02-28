import { DollarSign, TrendingUp, Percent, CreditCard } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import KpiCard from "@/components/admin/KpiCard";
import { financials, monthlyFinancials } from "@/data/mockAdminData";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useLang } from "@/i18n/LanguageContext";

const fmt = (n: number) => `$${n.toLocaleString()}`;

const FinancialKpis = () => {
  const { t } = useLang();
  const [simClients, setSimClients] = useState(10);
  const avgRevPerClient = financials.mrr / 187;
  const simulatedMrr = financials.mrr + simClients * avgRevPerClient;

  const expenseBreakdown = [
    { name: t("financial.adSpend"), value: 5200, color: "hsl(213,57%,46%)" },
    { name: t("financial.payroll"), value: 9800, color: "hsl(193,70%,50%)" },
    { name: t("financial.toolsSoftware"), value: 1400, color: "hsl(142,71%,45%)" },
    { name: t("financial.miscellaneous"), value: 1800, color: "hsl(45,93%,47%)" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title={t("financial.totalRevenue")} value={fmt(financials.totalRevenue)} icon={DollarSign} change={12.4} />
        <KpiCard title={t("financial.mrr")} value={fmt(financials.mrr)} icon={TrendingUp} change={12.5} />
        <KpiCard title={t("financial.totalExpenses")} value={fmt(financials.expenses)} icon={CreditCard} change={5.8} />
        <KpiCard title={t("financial.profitMargin")} value={`${financials.profitMargin}%`} icon={Percent} change={2.1} />
      </div>

      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">{t("financial.revenueVsExpenses")}</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyFinancials}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
              <XAxis dataKey="month" stroke="hsl(0,0%,40%)" fontSize={12} />
              <YAxis stroke="hsl(0,0%,40%)" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => [fmt(v)]} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(213,57%,46%)" fill="hsl(213,57%,46%)" fillOpacity={0.15} strokeWidth={2} name={t("financial.revenue")} />
              <Area type="monotone" dataKey="expenses" stroke="hsl(0,84%,60%)" fill="hsl(0,84%,60%)" fillOpacity={0.1} strokeWidth={2} name={t("financial.expenses")} />
              <Area type="monotone" dataKey="profit" stroke="hsl(142,71%,45%)" fill="hsl(142,71%,45%)" fillOpacity={0.1} strokeWidth={2} name={t("financial.profit")} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">{t("financial.expenseBreakdown")}</h3>
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

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">{t("financial.forecastSimulator")}</h3>
          <p className="text-xs text-muted-foreground">{t("financial.acquireClients")}</p>
          <div className="flex items-center gap-3">
            <Input type="number" value={simClients} onChange={(e) => setSimClients(Number(e.target.value))} className="w-24" min={0} />
            <span className="text-sm text-muted-foreground">{t("common.newClients")}</span>
          </div>
          <div className="rounded-lg border border-border p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("financial.currentMrr")}</span>
              <span className="font-semibold text-foreground">{fmt(financials.mrr)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("financial.addedRevenue")}</span>
              <span className="font-semibold text-green-400">+{fmt(Math.round(simClients * avgRevPerClient))}</span>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("financial.projectedMrr")}</span>
              <span className="font-bold text-primary text-lg">{fmt(Math.round(simulatedMrr))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialKpis;
