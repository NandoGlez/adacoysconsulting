import { FileBarChart, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const reportDefs: { titleKey: TranslationKey; descKey: TranslationKey; frequencyKey: TranslationKey; ready: boolean }[] = [
  { titleKey: "reports.monthlyKpi", descKey: "reports.monthlyKpiDesc", frequencyKey: "reports.monthly", ready: true },
  { titleKey: "reports.weeklyClient", descKey: "reports.weeklyClientDesc", frequencyKey: "reports.weekly", ready: true },
  { titleKey: "reports.marketingRoi", descKey: "reports.marketingRoiDesc", frequencyKey: "reports.monthly", ready: true },
  { titleKey: "reports.financialPl", descKey: "reports.financialPlDesc", frequencyKey: "reports.monthly", ready: false },
  { titleKey: "reports.teamPerformance", descKey: "reports.teamPerformanceDesc", frequencyKey: "reports.weekly", ready: true },
  { titleKey: "reports.crmPipeline", descKey: "reports.crmPipelineDesc", frequencyKey: "reports.weekly", ready: false },
];

const Reports = () => {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{t("reports.title")}</h2>
          <p className="text-sm text-muted-foreground">{t("reports.subtitle")}</p>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          {t("common.dateRange")}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reportDefs.map((r) => (
          <Card key={r.titleKey} className="glass-card border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <FileBarChart className="h-8 w-8 text-primary" />
                <Badge variant={r.ready ? "default" : "secondary"}>
                  {r.ready ? t("common.ready") : t("common.generating")}
                </Badge>
              </div>
              <CardTitle className="text-sm mt-3">{t(r.titleKey)}</CardTitle>
              <CardDescription className="text-xs">{t(r.descKey)}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{t(r.frequencyKey)}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled={!r.ready}>
                    <Download className="mr-1 h-3 w-3" /> CSV
                  </Button>
                  <Button variant="outline" size="sm" disabled={!r.ready}>
                    <Download className="mr-1 h-3 w-3" /> PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;
