export const colors = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  border: "var(--border)",
  ring: "var(--ring)",

  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  primaryHover: "var(--primary-hover)",
  primaryMuted: "var(--primary-muted)",

  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",
  accentHover: "var(--accent-hover)",
  accentMuted: "var(--accent-muted)",

  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",
  secondaryHover: "var(--secondary-hover)",
  secondaryMuted: "var(--secondary-muted)",

  success: "var(--success)",
  successMuted: "var(--success-muted)",
  warning: "var(--warning)",
  warningMuted: "var(--warning-muted)",
  error: "var(--error)",
  errorMuted: "var(--error-muted)",
  info: "var(--info)",
  infoMuted: "var(--info-muted)",

  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
  cardBorder: "var(--card-border)",
} as const;

export const componentClasses = {
  buttonPrimary:
    "bg-primary text-primary-foreground hover:bg-primary-hover font-medium rounded-lg px-4 py-2 transition-colors",
  buttonAccent:
    "bg-accent text-accent-foreground hover:bg-accent-hover font-medium rounded-lg px-4 py-2 transition-colors",
  buttonSecondary:
    "border border-border bg-transparent hover:bg-muted font-medium rounded-lg px-4 py-2 transition-colors",
  card: "bg-card text-card-foreground border border-card-border rounded-xl p-6",
  cardMuted: "bg-muted rounded-xl p-6",
  input:
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
  h1: "text-3xl font-bold tracking-tight text-foreground",
  h2: "text-2xl font-semibold tracking-tight text-foreground",
  h3: "text-xl font-semibold text-foreground",
  body: "text-base text-foreground",
  muted: "text-sm text-muted-foreground",
} as const;
