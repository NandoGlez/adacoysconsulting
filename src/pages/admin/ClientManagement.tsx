import { Users, TrendingUp, CheckCircle, Clock, ShieldCheck, UserMinus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import KpiCard from "@/components/admin/KpiCard";
import { clients, clientKpis } from "@/data/mockAdminData";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/LanguageContext";

const ClientManagement = () => {
  const { t } = useLang();

  const statusMap: Record<string, string> = {
    active: t("common.active"),
    inactive: t("common.inactive"),
    churned: t("common.churned"),
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <KpiCard title={t("clients.activeClients")} value={clientKpis.activeClients.toString()} icon={Users} change={5.2} />
        <KpiCard title={t("clients.inactive")} value={clientKpis.inactiveClients.toString()} icon={UserMinus} />
        <KpiCard title={t("clients.avgScoreImprovement")} value={`+${clientKpis.avgScoreImprovement} ${t("common.pts")}`} icon={TrendingUp} change={3.1} />
        <KpiCard title={t("clients.disputeSuccess")} value={`${clientKpis.disputeSuccessRate}%`} icon={CheckCircle} change={1.8} />
        <KpiCard title={t("clients.avgResolution")} value={`${clientKpis.avgResolutionDays} ${t("common.days")}`} icon={Clock} change={-4.5} />
        <KpiCard title={t("clients.retentionRate")} value={`${clientKpis.retentionRate}%`} icon={ShieldCheck} change={0.6} />
      </div>

      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">{t("clients.directory")}</h3>
          <Button variant="outline" size="sm">{t("common.exportCsv")}</Button>
        </div>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("clients.id")}</TableHead>
                <TableHead>{t("clients.name")}</TableHead>
                <TableHead>{t("clients.status")}</TableHead>
                <TableHead>{t("clients.source")}</TableHead>
                <TableHead>{t("clients.plan")}</TableHead>
                <TableHead className="text-right">{t("clients.scoreStart")}</TableHead>
                <TableHead className="text-right">{t("clients.scoreNow")}</TableHead>
                <TableHead className="text-right">Δ</TableHead>
                <TableHead className="text-right">{t("clients.disputes")}</TableHead>
                <TableHead className="text-right">{t("clients.won")}</TableHead>
                <TableHead className="text-right">{t("clients.winPct")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{c.id}</TableCell>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>
                    <Badge variant={c.status === "active" ? "default" : "secondary"} className={cn(c.status === "churned" && "bg-destructive/20 text-destructive")}>
                      {statusMap[c.status] || c.status}
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
};

export default ClientManagement;
