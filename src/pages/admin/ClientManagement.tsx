import { Users, TrendingUp, CheckCircle, Clock, ShieldCheck, UserMinus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import KpiCard from "@/components/admin/KpiCard";
import { clients, clientKpis } from "@/data/mockAdminData";
import { cn } from "@/lib/utils";

const ClientManagement = () => (
  <div className="space-y-6">
    {/* KPI cards */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      <KpiCard title="Active Clients" value={clientKpis.activeClients.toString()} icon={Users} change={5.2} />
      <KpiCard title="Inactive" value={clientKpis.inactiveClients.toString()} icon={UserMinus} />
      <KpiCard title="Avg Score Improvement" value={`+${clientKpis.avgScoreImprovement} pts`} icon={TrendingUp} change={3.1} />
      <KpiCard title="Dispute Success" value={`${clientKpis.disputeSuccessRate}%`} icon={CheckCircle} change={1.8} />
      <KpiCard title="Avg Resolution" value={`${clientKpis.avgResolutionDays} days`} icon={Clock} change={-4.5} />
      <KpiCard title="Retention Rate" value={`${clientKpis.retentionRate}%`} icon={ShieldCheck} change={0.6} />
    </div>

    {/* Client table */}
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Client Directory</h3>
        <Button variant="outline" size="sm">Export CSV</Button>
      </div>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead className="text-right">Score Start</TableHead>
              <TableHead className="text-right">Score Now</TableHead>
              <TableHead className="text-right">Δ</TableHead>
              <TableHead className="text-right">Disputes</TableHead>
              <TableHead className="text-right">Won</TableHead>
              <TableHead className="text-right">Win %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-mono text-xs text-muted-foreground">{c.id}</TableCell>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell>
                  <Badge variant={c.status === "active" ? "default" : "secondary"} className={cn(c.status === "churned" && "bg-destructive/20 text-destructive")}>
                    {c.status}
                  </Badge>
                </TableCell>
                <TableCell>{c.source}</TableCell>
                <TableCell>{c.plan}</TableCell>
                <TableCell className="text-right">{c.scoreStart}</TableCell>
                <TableCell className="text-right font-semibold">{c.scoreCurrent}</TableCell>
                <TableCell className="text-right text-green-400 font-medium">+{c.scoreCurrent - c.scoreStart}</TableCell>
                <TableCell className="text-right">{c.disputes}</TableCell>
                <TableCell className="text-right">{c.won}</TableCell>
                <TableCell className="text-right">{((c.won / c.disputes) * 100).toFixed(0)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
);

export default ClientManagement;
