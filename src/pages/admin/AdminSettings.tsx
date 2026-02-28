import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Database, MessageSquare, Instagram, Phone, Briefcase, RefreshCw, Key } from "lucide-react";

const integrations = [
  { name: "Airtable", icon: Database, status: "Not Connected", description: "Client & financial data source", connected: false },
  { name: "Instagram / Meta", icon: Instagram, status: "Not Connected", description: "Ad and organic performance metrics", connected: false },
  { name: "Slack", icon: MessageSquare, status: "Not Connected", description: "Team communication metrics", connected: false },
  { name: "WhatsApp Business", icon: Phone, status: "Not Connected", description: "Client messaging metrics", connected: false },
  { name: "CRM (HubSpot)", icon: Briefcase, status: "Not Connected", description: "Pipeline and deal tracking", connected: false },
];

const AdminSettings = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-lg font-semibold text-foreground">Settings</h2>
      <p className="text-sm text-muted-foreground">Configure integrations, sync, and preferences</p>
    </div>

    {/* Integrations */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Integrations</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {integrations.map((int) => (
          <Card key={int.name} className="glass-card border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <int.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-sm">{int.name}</CardTitle>
                    <CardDescription className="text-xs">{int.description}</CardDescription>
                  </div>
                </div>
                <Badge variant={int.connected ? "default" : "secondary"}>
                  {int.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center gap-2">
                <Input placeholder="API Key" type="password" className="text-xs" />
                <Button size="sm" variant="outline">
                  <Key className="mr-1 h-3 w-3" /> Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Sync settings */}
    <Card className="glass-card border-border">
      <CardHeader>
        <CardTitle className="text-sm">Data Sync</CardTitle>
        <CardDescription className="text-xs">Configure automatic data synchronization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Auto-sync every hour</p>
            <p className="text-xs text-muted-foreground">Automatically refresh data from all integrations</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Email notifications</p>
            <p className="text-xs text-muted-foreground">Get alerts for KPI threshold breaches</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Slack notifications</p>
            <p className="text-xs text-muted-foreground">Post alerts to your Slack channel</p>
          </div>
          <Switch />
        </div>
        <Button variant="outline" className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" /> Sync All Data Now
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default AdminSettings;
