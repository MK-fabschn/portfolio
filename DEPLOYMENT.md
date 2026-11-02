# Deployment – fabian-trutschnig.dev

Statische Astro-Seite in einem nginx-Container auf dem netcup-VPS des MK-Nikolsdorf-Projekts.
Sie läuft hinter dem Traefik aus dem MK-Nikolsdorf-Stack (`infra/traefik` im MK-Repo,
Docker-Netz `web`). Code-Deploys laufen per GitHub Action über SSH (`scripts/deploy.sh`).

```
Besucher ─► Cloudflare (Proxy, SSL „Full (strict)“) ─► VPS :443 Traefik ─► portfolio_web (nginx :80)
```

## 1. Cloudflare (einmalig, Dashboard)

- **DNS:** `A  fabian-trutschnig.dev → <VPS-IP>` (Proxy an), `CNAME www → fabian-trutschnig.dev` (Proxy an)
- **SSL/TLS → Overview:** Modus **Full (strict)**. Unter **Edge Certificates**: „Always Use HTTPS“ an.
- **Ausschalten**, damit die Seite ohne Cookies und Fremd-Skripte bleibt (Datenschutzerklärung!):
  - Security → Bots: **Bot Fight Mode** aus (setzt sonst das Cookie `__cf_bm`)
  - Speed → Optimization: **Rocket Loader** aus
  - Scrape Shield: **Email Address Obfuscation** aus
  - Analytics → Web Analytics / RUM: aus; **Zaraz** nicht verwenden
- **API-Token** (My Profile → API Tokens → Vorlage „Edit zone DNS“), Zone Resources:
  *Include → Specific zone → fabian-trutschnig.dev*. Den Token nur auf dem Server in
  `infra/traefik/.env` als `CF_DNS_API_TOKEN=…` eintragen, nie in Git.

## 2. Traefik (MK-Stack)

Traefik hat dafür einen zweiten Zertifikats-Resolver `cloudflare` (DNS-01, eigene Datei
`letsencrypt/acme-cloudflare.json`). Der netcup-Resolver `letsencrypt` bleibt unverändert.
Nach einer Änderung im Traefik-Ordner:

```sh
docker compose up -d   # erstellt Traefik neu – alle Seiten sind 2–5 s weg
```

## 3. Server (einmalig, als User `portfolio`)

Voraussetzung: `portfolio` ist in der Gruppe `docker`, das Netz `web` existiert.
Das Repo ist öffentlich, der Server klont deshalb über HTTPS ohne eigenen Key.

```sh
git clone https://github.com/MK-fabschn/portfolio.git ~/portfolio
cd ~/portfolio && chmod +x scripts/deploy.sh && ./scripts/deploy.sh
```

**Deploy-Key GitHub → Server:** lokal erzeugen (`ssh-keygen -t ed25519 -f portfolio_github_deploy -N ''`)
und den Public Key mit Zwangsbefehl in `/home/portfolio/.ssh/authorized_keys` eintragen. Der Key kann dann
nur `deploy.sh` starten, keine Shell, kein Port-Forwarding:

```
command="cd ~/portfolio && ./scripts/deploy.sh",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty ssh-ed25519 AAAA… github-actions deploy portfolio
```

Der private Teil kommt nur ins GitHub-Secret `VPS_SSH_KEY`. Unter GitHub → *Deploy keys* wird nichts eingetragen.

## 4. GitHub Secrets

Repo → Settings → Secrets and variables → Actions:

| Secret         | Wert                                               |
| -------------- | -------------------------------------------------- |
| `VPS_HOST`     | IP des VPS (nicht ins Repo schreiben)              |
| `VPS_USER`     | `portfolio`                                        |
| `VPS_SSH_KEY`  | privater Schlüssel des Deploy-Keys GitHub → Server |
| `VPS_SSH_PORT` | optional, Standard `22`                            |
| `DEPLOY_PATH`  | `/home/portfolio/portfolio`                        |

Der zugehörige Public Key steht in `/home/portfolio/.ssh/authorized_keys`.

## 5. Laufender Betrieb

- **Update:** Push auf `main` → CI (`astro check` + Build) → bei Erfolg Deploy per SSH.
  Manuell auf dem Server: `~/portfolio/scripts/deploy.sh`.
- **Logs:** nginx schreibt keine Zugriffsprotokolle (`access_log off`), Fehler-Logs rotieren
  (Docker-Log-Treiber `local`, 2 × 1 MB). Bei Änderungen die Datenschutzerklärung anpassen.
- **Lokal testen:** `docker build -t portfolio-web:test .` und
  `docker run --rm -p 8080:80 portfolio-web:test` → http://localhost:8080
