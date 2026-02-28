import { DollarSign, Users, UserPlus, TrendingDown, Target, Heart, ArrowUpRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { Progress } from "@/components/ui/progress";
import KpiCard from "@/components/admin/KpiCard";
import { kpiSummary, mrrHistory, revenueSources, acquisitionChannels } from "@/data/mockAdminData";

const fmt = (n: number) => `$${n.toLocaleString()}`;

const DashboardOverview = () => {
  const mrrProgress = (kpiSummary.mrr / kpiSummary.goalMrr) * 100;
  const monthsToGoal = kpiSummary.mrrGrowth > 0
    ? Math.ceil(Math.log(kpiSummary.goalMrr / kpiSummary.mrr) / Math.log(1 + kpiSummary.mrrGrowth / 100))
    : Infinity;

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Monthly Recurring Revenue" value={fmt(kpiSummary.mrr)} change={kpiSummary.mrrGrowth} icon={DollarSign} />
        <KpiCard title="Active Clients" value={kpiSummary.totalClients.toString()} change={8.3} icon={Users} />
        <KpiCard title="New Leads (This Month)" value={kpiSummary.newLeads.toString()} change={15.2} icon={UserPlus} />
        <KpiCard title="Churn Rate" value={`${kpiSummary.churnRate}%`} change={-0.8} icon={TrendingDown} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard title="Customer Acquisition Cost" value={fmt(kpiSummary.cac)} change={-5.1} icon={Target} />
        <KpiCard title="Lifetime Value" value={fmt(kpiSummary.ltv)} change={7.4} icon={Heart} />
        <KpiCard title="LTV:CAC Ratio" value={`${(kpiSummary.ltv / kpiSummary.cac).toFixed(1)}x`} icon={ArrowUpRight} subtitle="Target: 3x+" />
      </div>

      {/* Goal tracker */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Goal: $100K MRR</h3>
            <p className="text-xs text-muted-foreground">
              At current growth rate ({kpiSummary.mrrGrowth}%/mo), est. {monthsToGoal} months remaining
            </p>
          </div>
          <span className="text-lg font-bold text-primary">{mrrProgress.toFixed(1)}%</span>
        </div>
        <Progress value={mrrProgress} className="h-3" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{fmt(kpiSummary.mrr)}</span>
          <span>{fmt(kpiSummary.goalMrr)}</span>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* MRR Growth */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">MRR Growth Over Time</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mrrHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
                <XAxis dataKey="month" stroke="hsl(0,0%,40%)" fontSize={12} />
                <YAxis stroke="hsl(0,0%,40%)" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }}
                  formatter={(v: number) => [fmt(v), "MRR"]}
                />
                <Line type="monotone" dataKey="mrr" stroke="hsl(213,57%,46%)" strokeWidth={2.5} dot={{ fill: "hsl(213,57%,46%)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Sources Pie */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Revenue by Source</h3>
          <div className="h-64 flex items-center">
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie data={revenueSources} dataKey="value" cx="50%" cy="50%" outerRadius={80} strokeWidth={0}>
                  {revenueSources.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }}
                  formatter={(v: number) => [fmt(v)]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {revenueSources.map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-xs">
                  <div className="h-3 w-3 rounded-sm" style={{ background: s.color }} />
                  <span className="text-muted-foreground">{s.name}</span>
                  <span className="font-medium text-foreground">{fmt(s.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Acquisition channels */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Client Acquisition by Channel</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={acquisitionChannels}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
              <XAxis dataKey="channel" stroke="hsl(0,0%,40%)" fontSize={11} />
              <YAxis stroke="hsl(0,0%,40%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="leads" fill="hsl(213,57%,46%)" radius={[4, 4, 0, 0]} name="Leads" />
              <Bar dataKey="clients" fill="hsl(193,70%,50%)" radius={[4, 4, 0, 0]} name="Clients" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
