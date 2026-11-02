# Portfolio fabian-trutschnig.dev – statischer Astro-Build, ausgeliefert von nginx.
# Läuft auf dem VPS hinter Traefik (Netz "web"), siehe docker-compose.yml und DEPLOYMENT.md.

# ─── 1. Build ────────────────────────────────────────────────────────────────
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# ─── 2. Auslieferung ─────────────────────────────────────────────────────────
FROM nginx:1.29-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
# Traefik leitet erst auf "healthy" Container – start-interval hält die Lücke beim Deploy kurz.
HEALTHCHECK --interval=30s --timeout=3s --retries=3 --start-period=20s --start-interval=1s \
  CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1
