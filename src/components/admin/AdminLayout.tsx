import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard, Users, Megaphone, UsersRound, DollarSign,
  Briefcase, FileBarChart, Settings, Menu, X, LogOut, ChevronLeft, Bell, Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import adacoysLogo from "@/assets/adacoys-logo.png";

const navItems: { labelKey: TranslationKey; icon: typeof LayoutDashboard; path: string }[] = [
  { labelKey: "nav.dashboard", icon: LayoutDashboard, path: "/admin" },
  { labelKey: "nav.clients", icon: Users, path: "/admin/clients" },
  { labelKey: "nav.marketing", icon: Megaphone, path: "/admin/marketing" },
  { labelKey: "nav.teamOps", icon: UsersRound, path: "/admin/team" },
  { labelKey: "nav.financials", icon: DollarSign, path: "/admin/financials" },
  { labelKey: "nav.crm", icon: Briefcase, path: "/admin/crm" },
  { labelKey: "nav.reports", icon: FileBarChart, path: "/admin/reports" },
  { labelKey: "nav.settings", icon: Settings, path: "/admin/settings" },
];

const AdminLayoutInner = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLang, lang } = useLang();

  const currentNav = navItems.find((i) =>
    i.path === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(i.path)
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-card transition-all duration-300 lg:relative",
        sidebarOpen ? "w-64" : "w-[72px]",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <img src={adacoysLogo} alt="Adacoys" className="h-8 w-8 rounded" />
              <span className="text-sm font-semibold text-foreground">{t("nav.adminPanel")}</span>
            </div>
          )}
          <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <ChevronLeft className={cn("h-4 w-4 transition-transform", !sidebarOpen && "rotate-180")} />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = item.path === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(item.path);
            return (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}>
                <item.icon className="h-5 w-5 shrink-0" />
                {sidebarOpen && <span>{t(item.labelKey)}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-3">
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <LogOut className="h-5 w-5 shrink-0" />
            {sidebarOpen && <span>{t("nav.backToSite")}</span>}
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden lg:block">
            <h1 className="text-lg font-semibold text-foreground">
              {currentNav ? t(currentNav.labelKey) : t("nav.admin")}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <Button variant="outline" size="sm" onClick={toggleLang} className="gap-1.5 text-xs font-semibold">
              <Globe className="h-3.5 w-3.5" />
              {lang === "en" ? "ES" : "EN"}
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5">
              <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">A</div>
              <span className="hidden text-sm font-medium text-foreground sm:block">{t("nav.admin")}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const AdminLayout = () => (
  <LanguageProvider>
    <AdminLayoutInner />
  </LanguageProvider>
);

export default AdminLayout;
