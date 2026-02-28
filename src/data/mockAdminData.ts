// Mock data for admin dashboard prototype

export const kpiSummary = {
  mrr: 42500,
  mrrGrowth: 12.5,
  totalClients: 187,
  newLeads: 64,
  churnRate: 3.2,
  cac: 85,
  ltv: 1240,
  goalMrr: 100000,
};

export const mrrHistory = [
  { month: "Aug", mrr: 18000 },
  { month: "Sep", mrr: 21500 },
  { month: "Oct", mrr: 25800 },
  { month: "Nov", mrr: 29400 },
  { month: "Dec", mrr: 33200 },
  { month: "Jan", mrr: 37800 },
  { month: "Feb", mrr: 42500 },
];

export const revenueSources = [
  { name: "IG Ads", value: 18200, color: "hsl(213, 57%, 46%)" },
  { name: "Organic Videos", value: 11300, color: "hsl(193, 70%, 50%)" },
  { name: "Referrals", value: 8500, color: "hsl(142, 71%, 45%)" },
  { name: "Direct", value: 4500, color: "hsl(45, 93%, 47%)" },
];

export const acquisitionChannels = [
  { channel: "Instagram Ads", leads: 28, clients: 14, cac: 72 },
  { channel: "Organic Content", leads: 18, clients: 9, cac: 45 },
  { channel: "Referrals", leads: 12, clients: 10, cac: 25 },
  { channel: "WhatsApp", leads: 6, clients: 3, cac: 110 },
];

export const clients = [
  { id: "C001", name: "Maria Lopez", status: "active", startDate: "2025-08-15", source: "IG Ads", scoreStart: 520, scoreCurrent: 645, disputes: 8, won: 6, plan: "Premium" },
  { id: "C002", name: "Carlos Ramirez", status: "active", startDate: "2025-09-01", source: "Referral", scoreStart: 480, scoreCurrent: 590, disputes: 12, won: 9, plan: "Standard" },
  { id: "C003", name: "Ana Torres", status: "active", startDate: "2025-10-10", source: "Organic", scoreStart: 550, scoreCurrent: 680, disputes: 6, won: 5, plan: "Premium" },
  { id: "C004", name: "Luis Garcia", status: "inactive", startDate: "2025-06-20", source: "IG Ads", scoreStart: 490, scoreCurrent: 560, disputes: 10, won: 7, plan: "Standard" },
  { id: "C005", name: "Sofia Mendez", status: "active", startDate: "2025-11-05", source: "WhatsApp", scoreStart: 510, scoreCurrent: 620, disputes: 5, won: 4, plan: "Premium" },
  { id: "C006", name: "Diego Hernandez", status: "active", startDate: "2025-12-01", source: "Referral", scoreStart: 470, scoreCurrent: 545, disputes: 9, won: 6, plan: "Standard" },
  { id: "C007", name: "Isabella Cruz", status: "active", startDate: "2026-01-15", source: "IG Ads", scoreStart: 530, scoreCurrent: 640, disputes: 4, won: 3, plan: "Premium" },
  { id: "C008", name: "Miguel Santos", status: "churned", startDate: "2025-07-01", source: "Organic", scoreStart: 500, scoreCurrent: 530, disputes: 7, won: 3, plan: "Standard" },
];

export const clientKpis = {
  activeClients: 156,
  inactiveClients: 31,
  avgScoreImprovement: 98,
  disputeSuccessRate: 74.2,
  avgResolutionDays: 32,
  retentionRate: 89.5,
};

export const marketingKpis = {
  adSpend: 5200,
  impressions: 245000,
  clicks: 8400,
  ctr: 3.43,
  conversions: 28,
  costPerConversion: 185.71,
  organicViews: 128000,
  organicEngagement: 6.8,
  referralLeads: 12,
};

export const funnelData = [
  { stage: "Impressions", count: 245000 },
  { stage: "Clicks", count: 8400 },
  { stage: "Leads", count: 64 },
  { stage: "Consultations", count: 38 },
  { stage: "Clients", count: 22 },
];

export const teamMembers = [
  { name: "Javier R.", role: "Dispute Specialist", tasksCompleted: 45, avgResponseTime: 2.1, disputesHandled: 38, rating: 4.8 },
  { name: "Patricia M.", role: "Client Manager", tasksCompleted: 52, avgResponseTime: 1.5, disputesHandled: 0, rating: 4.9 },
  { name: "Roberto S.", role: "Dispute Specialist", tasksCompleted: 38, avgResponseTime: 3.2, disputesHandled: 32, rating: 4.5 },
  { name: "Elena V.", role: "Marketing Lead", tasksCompleted: 41, avgResponseTime: 1.8, disputesHandled: 0, rating: 4.7 },
];

export const teamKpis = {
  avgResponseTime: 2.1,
  taskCompletionRate: 92,
  slackMessages: 1240,
  whatsappConversations: 89,
  whatsappResponseRate: 94,
};

export const financials = {
  totalRevenue: 52800,
  mrr: 42500,
  oneTimeRevenue: 10300,
  expenses: 18200,
  profitMargin: 65.5,
  adSpend: 5200,
  payroll: 9800,
  tools: 1400,
  misc: 1800,
};

export const monthlyFinancials = [
  { month: "Aug", revenue: 22000, expenses: 12000, profit: 10000 },
  { month: "Sep", revenue: 26500, expenses: 13500, profit: 13000 },
  { month: "Oct", revenue: 31800, expenses: 14200, profit: 17600 },
  { month: "Nov", revenue: 36400, expenses: 15800, profit: 20600 },
  { month: "Dec", revenue: 41200, expenses: 16500, profit: 24700 },
  { month: "Jan", revenue: 47000, expenses: 17200, profit: 29800 },
  { month: "Feb", revenue: 52800, expenses: 18200, profit: 34600 },
];

export const crmDeals = [
  { id: "D001", contact: "Maria Lopez", stage: "Onboarded", value: 299, probability: 100, lastActivity: "2026-02-25" },
  { id: "D002", contact: "Pedro Alvarez", stage: "Consultation Booked", value: 199, probability: 70, lastActivity: "2026-02-27" },
  { id: "D003", contact: "Rosa Gutierrez", stage: "Lead Qualified", value: 299, probability: 45, lastActivity: "2026-02-28" },
  { id: "D004", contact: "Fernando Diaz", stage: "New Lead", value: 199, probability: 20, lastActivity: "2026-02-26" },
  { id: "D005", contact: "Carmen Ruiz", stage: "Consultation Booked", value: 299, probability: 65, lastActivity: "2026-02-28" },
  { id: "D006", contact: "Andres Morales", stage: "New Lead", value: 199, probability: 15, lastActivity: "2026-02-27" },
];

export const pipelineStages = [
  { stage: "New Lead", count: 18, value: 3582 },
  { stage: "Lead Qualified", count: 12, value: 2988 },
  { stage: "Consultation Booked", count: 8, value: 2192 },
  { stage: "Onboarded", count: 22, value: 5978 },
];
