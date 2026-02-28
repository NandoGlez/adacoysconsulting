import { Briefcase, ArrowRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import KpiCard from "@/components/admin/KpiCard";
import { crmDeals, pipelineStages } from "@/data/mockAdminData";
import { cn } from "@/lib/utils";

const stageColors: Record<string, string> = {
  "New Lead": "bg-muted text-muted-foreground",
  "Lead Qualified": "bg-yellow-500/20 text-yellow-400",
  "Consultation Booked": "bg-primary/20 text-primary",
  "Onboarded": "bg-green-500/20 text-green-400",
};

const CrmModule = () => (
  <div className="space-y-6">
    {/* Pipeline summary */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {pipelineStages.map((s) => (
        <KpiCard
          key={s.stage}
          title={s.stage}
          value={`${s.count} deals`}
          icon={Briefcase}
          subtitle={`$${s.value.toLocaleString()} value`}
        />
      ))}
    </div>

    {/* Pipeline visual */}
    <div className="glass-card p-6 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Pipeline Overview</h3>
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {pipelineStages.map((s, i) => (
          <div key={s.stage} className="flex items-center gap-2">
            <div className="rounded-lg border border-border p-4 min-w-[140px] text-center">
              <p className="text-lg font-bold text-foreground">{s.count}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.stage}</p>
              <p className="text-xs text-primary mt-1">${s.value.toLocaleString()}</p>
            </div>
            {i < pipelineStages.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
          </div>
        ))}
      </div>
    </div>

    {/* Pipeline bar chart */}
    <div className="glass-card p-6 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Pipeline Value by Stage</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pipelineStages}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
            <XAxis dataKey="stage" stroke="hsl(0,0%,40%)" fontSize={11} />
            <YAxis stroke="hsl(0,0%,40%)" fontSize={12} tickFormatter={(v) => `$${v}`} />
            <Tooltip contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => [`$${v.toLocaleString()}`]} />
            <Bar dataKey="value" fill="hsl(213,57%,46%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Deals table */}
    <div className="glass-card p-6 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Active Deals</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead className="text-right">Value</TableHead>
            <TableHead className="text-right">Probability</TableHead>
            <TableHead>Last Activity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crmDeals.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">{d.id}</TableCell>
              <TableCell className="font-medium">{d.contact}</TableCell>
              <TableCell>
                <Badge className={cn("border-0", stageColors[d.stage])}>{d.stage}</Badge>
              </TableCell>
              <TableCell className="text-right">${d.value}/mo</TableCell>
              <TableCell className="text-right">{d.probability}%</TableCell>
              <TableCell className="text-muted-foreground">{d.lastActivity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default CrmModule;
