# Security Runbook

## Threat Model

The support agent can read support tickets, inspect account metadata, draft CRM updates, and propose refunds. It must not expose PII, leak credentials, follow hidden prompt-injection instructions, send data to untrusted domains, or execute destructive account changes without review.

## Policy Actions

- `ALLOW`: benign summarization and read-only ticket analysis.
- `DENY`: system prompt extraction, credential exfiltration, private file reads, and untrusted network egress.
- `HUMAN_REVIEW`: refunds, account deletion, legal requests, payment state changes, and ambiguous PII handling.
- `QUARANTINE`: outputs containing secrets, phishing links, or suspicious URLs.
- `RATE_LIMIT`: repeated failed tool calls or prompt-injection attempts.

## Audit Requirements

Every policy decision writes an audit log with:

- `request_id`
- `trace_id`
- `actor_id`
- `declared_intent`
- `detected_intent`
- `matched_rule`
- `verdict`
- `policy_action`
- `deny_reason`
- `reviewer_state`
- `risk_score`

## Gemini / AI Studio Use

Gemini is only used through a server-side proxy with `GOOGLE_API_KEY` loaded from `process.env`. Browser-exposed names such as `VITE_GEMINI_KEY` and `NEXT_PUBLIC_GOOGLE_API_KEY` are prohibited.

## A2A Boundary

The A2A Agent Card declares the provider, version, URL, supported skills, authentication expectation, and safe capabilities. Multi-agent callers must treat this agent as a review-only support assistant, not a payment or account-admin agent.
