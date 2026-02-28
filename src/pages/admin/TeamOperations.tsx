import { Clock, CheckCircle, MessageSquare, Phone, Star } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import KpiCard from "@/components/admin/KpiCard";
import { teamMembers, teamKpis } from "@/data/mockAdminData";
import { useLang } from "@/i18n/LanguageContext";

const roleKeys: Record<string, string> = {
  "Dispute Specialist": "role.disputeSpecialist",
  "Client Manager": "role.clientManager",
  "Marketing Lead": "role.marketingLead",
};

const TeamOperations = () => {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <KpiCard title={t("team.avgResponseTime")} value={`${teamKpis.avgResponseTime}h`} icon={Clock} change={-12.0} />
        <KpiCard title={t("team.taskCompletion")} value={`${teamKpis.taskCompletionRate}%`} icon={CheckCircle} change={3.2} />
        <KpiCard title={t("team.slackMessages")} value={teamKpis.slackMessages.toLocaleString()} icon={MessageSquare} />
        <KpiCard title={t("team.whatsappConvos")} value={teamKpis.whatsappConversations.toString()} icon={Phone} change={9.5} />
        <KpiCard title={t("team.waResponseRate")} value={`${teamKpis.whatsappResponseRate}%`} icon={Phone} change={1.1} />
      </div>

      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">{t("team.leaderboard")}</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("team.rank")}</TableHead>
              <TableHead>{t("team.name")}</TableHead>
              <TableHead>{t("team.role")}</TableHead>
              <TableHead className="text-right">{t("team.tasksDone")}</TableHead>
              <TableHead className="text-right">{t("team.avgResponse")}</TableHead>
              <TableHead className="text-right">{t("team.disputes")}</TableHead>
              <TableHead className="text-right">{t("team.rating")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...teamMembers]
              .sort((a, b) => b.tasksCompleted - a.tasksCompleted)
              .map((m, i) => (
                <TableRow key={m.name}>
                  <TableCell>
                    <Badge variant={i === 0 ? "default" : "secondary"} className={i === 0 ? "bg-yellow-500/20 text-yellow-400" : ""}>
                      #{i + 1}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{m.name}</TableCell>
                  <TableCell className="text-muted-foreground">{t(roleKeys[m.role] as any) || m.role}</TableCell>
                  <TableCell className="text-right font-semibold">{m.tasksCompleted}</TableCell>
                  <TableCell className="text-right">{m.avgResponseTime}h</TableCell>
                  <TableCell className="text-right">{m.disputesHandled || "—"}</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {m.rating}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TeamOperations;
