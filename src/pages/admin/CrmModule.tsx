import { Briefcase, ArrowRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import KpiCard from "@/components/admin/KpiCard";
import { crmDeals, pipelineStages } from "@/data/mockAdminData";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const stageColorKeys: Record<string, string> = {
  "New Lead": "bg-muted text-muted-foreground",
  "Lead Qualified": "bg-yellow-500/20 text-yellow-400",
  "Consultation Booked": "bg-primary/20 text-primary",
  "Onboarded": "bg-green-500/20 text-green-400",
};

const stageTranslationKeys: Record<string, TranslationKey> = {
  "New Lead": "crm.newLead",
  "Lead Qualified": "crm.leadQualified",
  "Consultation Booked": "crm.consultationBooked",
  "Onboarded": "crm.onboarded",
};

const CrmModule = () => {
  const { t } = useLang();

  const translatedPipeline = pipelineStages.map(s => ({
    ...s,
    translatedStage: t(stageTranslationKeys[s.stage] || "crm.newLead"),
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {translatedPipeline.map((s) => (
          <KpiCard
            key={s.stage}
            title={s.translatedStage}
            value={`${s.count} ${t("common.deals")}`}
            icon={Briefcase}
            subtitle={`$${s.value.toLocaleString()} ${t("common.value")}`}
          />
        ))}
      </div>

      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">{t("crm.pipelineOverview")}</h3>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {translatedPipeline.map((s, i) => (
            <div key={s.stage} className="flex items-center gap-2">
              <div className="rounded-lg border border-border p-4 min-w-[140px] text-center">
                <p className="text-lg font-bold text-foreground">{s.count}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.translatedStage}</p>
                <p className="text-xs text-primary mt-1">${s.value.toLocaleString()}</p>
              </div>
              {i < translatedPipeline.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">{t("crm.pipelineValueByStage")}</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={translatedPipeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,15%)" />
              <XAxis dataKey="translatedStage" stroke="hsl(0,0%,40%)" fontSize={11} />
              <YAxis stroke="hsl(0,0%,40%)" fontSize={12} tickFormatter={(v) => `$${v}`} />
              <Tooltip contentStyle={{ background: "hsl(0,0%,5%)", border: "1px solid hsl(0,0%,15%)", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => [`$${v.toLocaleString()}`]} />
              <Bar dataKey="value" fill="hsl(213,57%,46%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">{t("crm.activeDeals")}</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("clients.id")}</TableHead>
              <TableHead>{t("crm.contact")}</TableHead>
              <TableHead>{t("crm.stage")}</TableHead>
              <TableHead className="text-right">{t("common.value")}</TableHead>
              <TableHead className="text-right">{t("crm.probability")}</TableHead>
              <TableHead>{t("crm.lastActivity")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {crmDeals.map((d) => (
              <TableRow key={d.id}>
                <TableCell className="font-mono text-xs text-muted-foreground">{d.id}</TableCell>
                <TableCell className="font-medium">{d.contact}</TableCell>
                <TableCell>
                  <Badge className={cn("border-0", stageColorKeys[d.stage])}>
                    {t(stageTranslationKeys[d.stage] || "crm.newLead")}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">${d.value}/{t("reports.monthly").charAt(0).toLowerCase()}</TableCell>
                <TableCell className="text-right">{d.probability}%</TableCell>
                <TableCell className="text-muted-foreground">{d.lastActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CrmModule;
