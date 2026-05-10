# Support Agent Trust Demo

This fixture is a small enterprise-support agent used to demonstrate Agent Security Drill Kit.

The agent runs in dry-run demo mode against localhost fixtures only. It can summarize a support ticket, propose a CRM note, and prepare a refund request, but it cannot write to production systems without human review.

## Security Story

- Policy layer: `policies/agent-security-policy.yaml`
- Agent identity: `policies/a2a-agent-card.json`
- Prompt-injection and exfiltration drills: `tests/red-team-drills.json`
- Runtime enforcement sketch: `src/policy-middleware.js`
- Audit event schema: `schemas/audit-event.schema.json`
- CI smoke test: `.github/workflows/security-drill.yml`

## Trust Boundaries

- Tool scope is least privilege by default.
- CRM reads are read-only unless the proposed write is approved.
- Payment, refund, account deletion, and off-domain transfer paths require HUMAN_REVIEW.
- Network policy only allows `api.example.invalid`, `crm.example.invalid`, and `localhost`.
- Filesystem policy only allows reading fixture data under `fixtures/`.
- Denied paths include `.env`, `**/secrets/**`, `**/.ssh/**`, and `/etc/**`.
- Output inspection blocks secrets, phishing links, prompt-injection strings, and undeclared data transfer.

## Demo Evidence

The demo captures an audit log entry with request_id, declared_intent, detected intent, matched rule, verdict, policy action, deny reason, and reviewer state. The goal is to show declared-versus-detected intent mismatches before a buyer or security team trusts the agent.

## Safe Demo Mode

Use `npm test` or the GitHub Actions workflow to run the fixture. No real accounts, real customers, real payment rails, or production credentials are used.
