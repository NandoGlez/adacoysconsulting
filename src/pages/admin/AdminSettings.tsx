import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Database, MessageSquare, Instagram, Phone, Briefcase, RefreshCw, Key } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const integrationDefs: { nameKey: TranslationKey; descKey: TranslationKey; icon: typeof Database }[] = [
  { nameKey: "settings.airtable", descKey: "settings.airtableDesc", icon: Database },
  { nameKey: "settings.instagramMeta", descKey: "settings.instagramMetaDesc", icon: Instagram },
  { nameKey: "settings.slack", descKey: "settings.slackDesc", icon: MessageSquare },
  { nameKey: "settings.whatsapp", descKey: "settings.whatsappDesc", icon: Phone },
  { nameKey: "settings.crmHubspot", descKey: "settings.crmHubspotDesc", icon: Briefcase },
];

const AdminSettings = () => {
  const { t } = useLang();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">{t("settings.title")}</h2>
        <p className="text-sm text-muted-foreground">{t("settings.subtitle")}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">{t("settings.integrations")}</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {integrationDefs.map((int) => (
            <Card key={int.nameKey} className="glass-card border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <int.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{t(int.nameKey)}</CardTitle>
                      <CardDescription className="text-xs">{t(int.descKey)}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{t("common.notConnected")}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <Input placeholder={t("settings.apiKey")} type="password" className="text-xs" />
                  <Button size="sm" variant="outline">
                    <Key className="mr-1 h-3 w-3" /> {t("common.connect")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="glass-card border-border">
        <CardHeader>
          <CardTitle className="text-sm">{t("settings.dataSync")}</CardTitle>
          <CardDescription className="text-xs">{t("settings.dataSyncDesc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{t("settings.autoSync")}</p>
              <p className="text-xs text-muted-foreground">{t("settings.autoSyncDesc")}</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{t("settings.emailNotifications")}</p>
              <p className="text-xs text-muted-foreground">{t("settings.emailNotificationsDesc")}</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{t("settings.slackNotifications")}</p>
              <p className="text-xs text-muted-foreground">{t("settings.slackNotificationsDesc")}</p>
            </div>
            <Switch />
          </div>
          <Button variant="outline" className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" /> {t("settings.syncAllNow")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
