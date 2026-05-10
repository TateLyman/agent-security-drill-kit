# Agent Security Drill Kit

Browser-only readiness checker for agent-security launches.

It scores a repo or pasted project notes for:

- prompt injection and exfiltration drills
- policy actions such as deny, log, human review, quarantine, and rate limit
- explicit tool, network, and filesystem boundaries
- audit trails and declared-versus-detected intent evidence
- safe demo mode, repeatable tests, CI, docs, and secret hygiene

Live site:

- Main canonical page: https://tateprograms.com/agent-security-drill.html

## Local Use

Open `index.html` directly, or run:

```bash
npm run serve
```

Checks run locally in the browser. Uploaded folders/files are not sent to a backend.

## Why This Exists

Agent demos increasingly need clear proof that policy, review, audit, and runtime controls exist before a buyer, judge, or early user can trust the workflow. This kit turns those expectations into a small, repeatable preflight.
