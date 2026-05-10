# Agent Security Drill Kit

Browser-only readiness checker for agent-security launches.

It scores a repo or pasted project notes for:

- prompt injection and exfiltration drills
- policy actions such as deny, log, human review, quarantine, and rate limit
- explicit tool, network, and filesystem boundaries
- audit trails and declared-versus-detected intent evidence
- A2A-style agent identity and capability boundaries
- Gemini / AI Studio usage patterns that avoid browser-exposed keys
- safe demo mode, repeatable tests, CI, docs, and secret hygiene

It can export:

- a drill report
- a Lobster Trap-style policy starter
- an A2A-style Agent Card starter
- an audit-event schema
- a Gemini / AI Studio adversarial-test prompt
- a concise hackathon or buyer submission summary

Live site:

- Main canonical page: https://tateprograms.com/agent-security-drill.html

## Local Use

Open `index.html` directly, or run:

```bash
npm run serve
```

Checks run locally in the browser. Uploaded folders/files are not sent to a backend.

## TechEx / lablab Submission

The current submission package is in [`docs/techex-submission-pack.md`](docs/techex-submission-pack.md), with paste-ready lablab fields in [`docs/lablab-field-copy.md`](docs/lablab-field-copy.md).

Primary angle: Agent Security & AI Governance.

Secondary angles: Gemini / AI Studio adversarial-test generation and A2A trust-boundary evidence.

## Why This Exists

Agent demos increasingly need clear proof that policy, review, audit, and runtime controls exist before a buyer, judge, or early user can trust the workflow. This kit turns those expectations into a small, repeatable preflight.
