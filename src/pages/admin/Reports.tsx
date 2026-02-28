import { FileBarChart, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reportList = [
  { title: "Monthly KPI Summary", description: "All key metrics for the current month", type: "Auto-generated", frequency: "Monthly", ready: true },
  { title: "Weekly Client Report", description: "Client acquisition, churn, and score improvements", type: "Auto-generated", frequency: "Weekly", ready: true },
  { title: "Marketing ROI Report", description: "Ad spend, conversions, and channel performance", type: "Auto-generated", frequency: "Monthly", ready: true },
  { title: "Financial P&L Statement", description: "Revenue, expenses, and profit margins", type: "Auto-generated", frequency: "Monthly", ready: false },
  { title: "Team Performance Report", description: "Task completion, response times, and leaderboard", type: "Auto-generated", frequency: "Weekly", ready: true },
  { title: "CRM Pipeline Report", description: "Deal stages, conversion rates, and pipeline value", type: "Auto-generated", frequency: "Weekly", ready: false },
];

const Reports = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Reports & Analytics</h2>
        <p className="text-sm text-muted-foreground">Generate and download exportable reports</p>
      </div>
      <Button variant="outline" size="sm">
        <Calendar className="mr-2 h-4 w-4" />
        Date Range
      </Button>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reportList.map((r) => (
        <Card key={r.title} className="glass-card border-border">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <FileBarChart className="h-8 w-8 text-primary" />
              <Badge variant={r.ready ? "default" : "secondary"}>
                {r.ready ? "Ready" : "Generating..."}
              </Badge>
            </div>
            <CardTitle className="text-sm mt-3">{r.title}</CardTitle>
            <CardDescription className="text-xs">{r.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{r.frequency}</span>
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

export default Reports;
