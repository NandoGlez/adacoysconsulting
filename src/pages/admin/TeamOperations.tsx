import { Clock, CheckCircle, MessageSquare, Phone, Star } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import KpiCard from "@/components/admin/KpiCard";
import { teamMembers, teamKpis } from "@/data/mockAdminData";

const TeamOperations = () => (
  <div className="space-y-6">
    {/* KPI cards */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <KpiCard title="Avg Response Time" value={`${teamKpis.avgResponseTime}h`} icon={Clock} change={-12.0} />
      <KpiCard title="Task Completion" value={`${teamKpis.taskCompletionRate}%`} icon={CheckCircle} change={3.2} />
      <KpiCard title="Slack Messages (30d)" value={teamKpis.slackMessages.toLocaleString()} icon={MessageSquare} />
      <KpiCard title="WhatsApp Convos" value={teamKpis.whatsappConversations.toString()} icon={Phone} change={9.5} />
      <KpiCard title="WA Response Rate" value={`${teamKpis.whatsappResponseRate}%`} icon={Phone} change={1.1} />
    </div>

    {/* Leaderboard */}
    <div className="glass-card p-6 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Team Leaderboard</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Tasks Done</TableHead>
            <TableHead className="text-right">Avg Response</TableHead>
            <TableHead className="text-right">Disputes</TableHead>
            <TableHead className="text-right">Rating</TableHead>
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
                <TableCell className="text-muted-foreground">{m.role}</TableCell>
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

export default TeamOperations;
