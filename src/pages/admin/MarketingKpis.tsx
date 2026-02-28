import { DollarSign, Eye, MousePointer, Target, Video, Share2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import KpiCard from "@/components/admin/KpiCard";
import { marketingKpis, funnelData } from "@/data/mockAdminData";

const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toString();

const MarketingKpis = () => (
  <div className="space-y-6">
    {/* Top KPIs */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <KpiCard title="Ad Spend (This Month)" value={`$${marketingKpis.adSpend.toLocaleString()}`} icon={DollarSign} change={8.3} />
      <KpiCard title="Impressions" value={fmt(marketingKpis.impressions)} icon={Eye} change={22.1} />
      <KpiCard title="Clicks" value={fmt(marketingKpis.clicks)} icon={MousePointer} change={14.6} />
      <KpiCard title="CTR" value={`${marketingKpis.ctr}%`} icon={Target} change={-0.3} />
      <KpiCard title="Conversions" value={marketingKpis.conversions.toString()} icon={Target} change={18.5} />
      <KpiCard title="Cost per Conversion" value={`$${marketingKpis.costPerConversion.toFixed(0)}`} icon={DollarSign} change={-6.2} />
    </div>

    {/* Organic */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <KpiCard title="Organic Video Views" value={fmt(marketingKpis.organicViews)} icon={Video} change={35.0} />
      <KpiCard title="Organic Engagement Rate" value={`${marketingKpis.organicEngagement}%`} icon={Share2} change={2.1} />
    </div>

    {/* Funnel */}
    <div className="glass-card p-6 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Lead-to-Client Funnel</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={funnelData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
            <XAxis type="number" stroke="hsl(0,0%,40%)" fontSize={12} tickFormatter={(v) => fmt(v)} />
            <YAxis type="category" dataKey="stage" stroke="hsl(0,0%,40%)" fontSize={11} width={110} />
            <Tooltip contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => [v.toLocaleString()]} />
            <Bar dataKey="count" fill="hsl(213,57%,46%)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default MarketingKpis;
