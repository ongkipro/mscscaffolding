# Observability Contract — mscscaffolding

Updated: 2026-09-21
Status: REQUIRED

Probe format:

```text
Probe: <name>|<url>|<expected-status>|<contains-or-TBD>|<max-latency-ms>
```

The expected status may be an exact code (`200`) or an inclusive range
(`200-299`). Every configured probe is mandatory. Use stable, non-secret public
endpoints only; private-network probes require an explicit local-test override.

Probe: homepage|http://localhost:3000/|200-299|MSC SCAFFOLDING|1000
Probe: catalog|http://localhost:3000/produk|200-299|Katalog|1000
Probe: calculator|http://localhost:3000/kalkulator|200-299|Kalkulator|1000
Probe: health|http://localhost:3000/api/health|200-299|ok|500

## Recommended production probes

Add probes for database connectivity, background jobs, queue/worker health, or a
critical-error sentinel when the application exposes stable HTTP endpoints for
them. Keep vendor-specific credentials and query tokens out of this file.

Examples:

```text
Probe: database|https://example.com/health/db|200-299|ok|750
Probe: background-jobs|https://example.com/health/workers|200-299|ok|1000
Probe: critical-errors|https://example.com/health/errors|200-299|critical_errors=0|1000
```
