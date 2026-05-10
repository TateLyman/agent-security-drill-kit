# TechEx / lablab Submission Pack

## Project Title

Agent Security Drill Kit: Trust Evidence Console

## Short Description

A browser-only workbench that turns an agent demo into a security evidence pack: prompt-injection drills, tool-boundary checks, Lobster Trap-style policy starter, A2A agent identity, audit schema, Gemini drill prompt, and a judge-ready fix queue.

## Long Description

Enterprise teams are moving agents from demos into workflows where they read files, call APIs, delegate to other agents, and sometimes trigger spend or writes. The hard blocker is not model quality; it is proof. Security reviewers need to see what the agent is allowed to do, what it is denied from doing, what happens when a prompt tries to override instructions, how credentials and PII are handled, and whether every risky action leaves an audit trail.

Agent Security Drill Kit solves that review gap with a local, no-backend console. A builder loads a project folder or pastes project notes, then the tool scores visible controls across policy, prompt-injection resilience, exfiltration handling, tool scopes, network and filesystem boundaries, human review, rate limits, safe demo mode, tests, CI, docs, and secret hygiene. The result is not just a score: it exports a policy starter, A2A-style Agent Card, audit event schema, Gemini/AI Studio adversarial-test prompt, fix backlog, and concise submission summary.

The product is intentionally practical for hackathon demos and real buyers. It does not ask teams to trust a black-box scanner or upload code to a third party. It helps a builder create the evidence an enterprise security reviewer, sponsor judge, or early customer can inspect.

## Primary Track Fit

Agent Security & AI Governance.

The project directly targets guardrails, policy enforcement, observability, access control, audit trails, explainability, and adversarial testing. It also includes declared-versus-detected intent language and policy artifacts aligned with the public Lobster Trap challenge description.

## Secondary Track Fit

Google AI Studio / Gemini.

The console exports a Gemini/AI Studio prompt for generating additional adversarial cases. If a Gemini API key is available, the safe production path is a server-side proxy only. Browser-exposed Gemini keys are treated as a launch blocker by the scanner.

A2A.

The evidence pack exports an A2A-style Agent Card starter with provider identity, version, URL, capabilities, security scheme, and review skill. The scanner flags agent identity as a trust boundary for multi-agent workflows.

## Technology Tags

Agent security, AI governance, prompt injection, exfiltration prevention, policy enforcement, audit trail, A2A, Gemini, Google AI Studio, Lobster Trap, browser File API, JavaScript, static web app.

## Demo Flow

1. Open `https://tateprograms.com/agent-security-drill.html`.
2. Load the demo repo or paste project notes.
3. Show the readiness score and grouped signals.
4. Open the fix queue and explain the highest-risk missing control.
5. Export the evidence pack.
6. Show the generated policy starter, audit event schema, A2A Agent Card, and Gemini drill prompt.
7. Copy the submission summary.
8. Close with the buyer story: this converts agent demos into reviewable evidence for enterprise security teams.

## Submission Fields

Project URL:

`https://tateprograms.com/agent-security-drill.html`

Repository:

`https://github.com/TateLyman/agent-security-drill-kit`

Canonical brand site:

`https://tateprograms.com`

Contact:

`hello@tateprograms.com`

## Cover Image Direction

Use a realistic terminal/security-console image, not a generic robot graphic. Visual language should feel like an operations console: policy traces, denied actions, audit ledger, and evidence export.

## Video Script

Opening:

"Agents are starting to touch files, APIs, private data, and payments, but most demos still cannot prove what happens when something goes wrong. Agent Security Drill Kit turns that trust gap into a local evidence pack."

Middle:

"I load the project, and the scanner checks whether policy, prompt-injection drills, tool boundaries, audit trails, safe demo mode, and secret hygiene are visible. The score is useful, but the important part is the export: a policy starter, A2A-style Agent Card, audit schema, Gemini drill prompt, and fix backlog."

Close:

"The target user is any team shipping an agent into an enterprise workflow. Before they ask a buyer, judge, or sponsor to trust the demo, they can show exactly what gets denied, what gets reviewed, and what evidence is preserved."

## Current Source Ledger

- TechEx / lablab hackathon page: `https://lablab.ai/ai-hackathons/techex-intelligent-enterprise-solutions-hackathon`
- A2A project repository: `https://github.com/a2aproject/A2A`
- Gemini API quickstart: `https://ai.google.dev/gemini-api/docs/quickstart`
- Lobster Trap site: `https://lobstertrap.org/`
- Lobster Trap repository: `https://github.com/veeainc/lobstertrap`
