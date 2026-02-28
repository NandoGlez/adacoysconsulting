import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change?: number;
  icon: LucideIcon;
  subtitle?: string;
}

const KpiCard = ({ title, value, change, icon: Icon, subtitle }: KpiCardProps) => (
  <div className="glass-card p-5 space-y-3">
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</span>
      <div className="rounded-lg bg-primary/10 p-2">
        <Icon className="h-4 w-4 text-primary" />
      </div>
    </div>
    <div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      {change !== undefined && (
        <div className="mt-1 flex items-center gap-1">
          {change >= 0 ? (
            <TrendingUp className="h-3 w-3 text-green-400" />
          ) : (
            <TrendingDown className="h-3 w-3 text-destructive" />
          )}
          <span className={cn("text-xs font-medium", change >= 0 ? "text-green-400" : "text-destructive")}>
            {change >= 0 ? "+" : ""}{change}%
          </span>
          <span className="text-xs text-muted-foreground">vs last month</span>
        </div>
      )}
      {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  </div>
);

export default KpiCard;
