# Observability Contract — mscscaffolding

Updated: 2026-10-06
Status: REQUIRED

Probe format:

```text
Probe: <name>|<url>|<expected-status>|<contains-or-TBD>|<max-latency-ms>
```

The expected status may be an exact code (`200`) or an inclusive range
(`200-299`). Every configured probe is mandatory. Use stable, non-secret public
endpoints only; private-network probes require an explicit local-test override.

Probe: homepage|http://localhost:3000/|200-299|MSC Scaffolding|1000
Probe: catalog|http://localhost:3000/produk|200-299|Katalog|1000
Probe: calculator|http://localhost:3000/kalkulator|200-299|Kalkulator|1000
Probe: sewa|http://localhost:3000/sewa-scaffolding|200-299|Sewa|1000
Probe: sitemap|http://localhost:3000/sitemap.xml|200-299|urlset|500

## Recommended production probes

Add probes for database connectivity, background jobs, queue/worker health, or a
critical-error sentinel when the application exposes stable HTTP endpoints for
them. Keep vendor-specific credentials and query tokens out of this file.

Production probes (`https://mscscaffolding.com`):

```text
Probe: prod-homepage|https://mscscaffolding.com/|200-299|MSC Scaffolding|1500
Probe: prod-kalkulator|https://mscscaffolding.com/kalkulator|200-299|Kalkulator|1500
Probe: prod-sitemap|https://mscscaffolding.com/sitemap.xml|200-299|urlset|1000
```
