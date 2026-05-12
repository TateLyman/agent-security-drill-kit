# lablab / TechEx Field Copy

Use this when creating or updating the hackathon project page.

## Project Title

Agent Security Drill Kit: Trust Evidence Console

## Short Description

A browser-only workbench that turns agent demos into security evidence packs: prompt-injection drills, policy checks, A2A agent identity, audit schema, Gemini adversarial-test prompt, and a fix queue enterprise reviewers can inspect.

## Long Description

Agent demos increasingly touch files, APIs, internal data, payments, and other agents. The risk is that teams often cannot prove what the agent is allowed to do, what it must deny, when a human review gate should trigger, or what audit evidence survives after a risky prompt.

Agent Security Drill Kit is a local, browser-only trust console for that gap. A builder loads a project folder or pastes notes, and the tool scores visible controls across prompt-injection drills, exfiltration handling, policy actions, tool scopes, network and filesystem boundaries, rate limits, human review, safe demo mode, tests, CI, documentation, and secret hygiene.

The output is designed for judges, security reviewers, and early customers. It exports a complete evidence pack with a Lobster Trap-style policy starter, A2A-style Agent Card starter, audit event schema, Gemini / AI Studio prompt for generating additional adversarial cases, prioritized fix backlog, and copyable submission summary.

The core value is practical: before a team asks anyone to trust an agent workflow, they can show exactly what gets denied, what gets reviewed, what gets logged, and what still needs to be patched.

During the TechEx active build window, the project is positioned as an enterprise review layer rather than another agent demo. The strongest judge frame is: agent capability is becoming common; reviewable trust evidence is still scarce.

## Problem

Enterprise agent adoption is blocked by missing trust evidence. Many teams can demo useful behavior, but they cannot clearly show policy enforcement, prompt-injection resilience, tool permissions, audit trails, or human review controls.

## Solution

Agent Security Drill Kit converts those requirements into a repeatable local preflight. It scans project evidence, generates a readiness score, and exports the artifacts needed for review: policy, identity, audit, adversarial tests, and fixes.

## Primary Track

Agent Security & AI Governance.

## Secondary Track Angles

Google AI Studio / Gemini:

The project exports a Gemini / AI Studio prompt that can generate additional adversarial drill cases. If direct API integration is added, the key must stay server-side.

A2A:

The project exports an A2A-style Agent Card starter and flags agent identity/capability boundaries as a trust requirement for multi-agent workflows.

## Technology Tags

Agent security, AI governance, prompt injection, exfiltration prevention, policy enforcement, audit trails, A2A, Gemini, Google AI Studio, Lobster Trap, JavaScript, static web app, browser File API.

## Repository URL

https://github.com/TateLyman/agent-security-drill-kit

## Application URL

https://tateprograms.com/agent-security-drill.html

## Demo URL

https://tateprograms.com/agent-security-drill.html

## Cover Image

`docs/media/techex-cover.png`

## What Makes It Original

Most agent-security demos stop at detection or generic guardrails. This project focuses on the handoff artifact: a local evidence pack that a judge, buyer, or security reviewer can inspect. It combines preflight scoring, policy export, A2A identity, Gemini-generated adversarial drills, and an audit-ready schema in one static tool.

## Business Value

Agent teams need a faster path through security review. A tool like this can become a paid launch review, a repo scanner, or a lightweight governance layer for teams preparing demos, hackathon submissions, pilot deployments, or buyer handoffs.

## Judging Criteria Notes

Application of technology: local browser scan, structured scoring, evidence export, A2A identity, Gemini drill prompt, audit schema.

Presentation: safe fixture project, 90-second demo, clear buyer-review story.

Business value: faster review for enterprise agent pilots and security-conscious launches.

Originality: trust evidence around the agent, not just another task-performing agent.

## Demo Script

1. Load the app.
2. Paste or load an agent project.
3. Show the score and grouped signals.
4. Open the fix queue.
5. Export the evidence pack.
6. Show the policy starter, A2A Agent Card, audit event schema, and Gemini drill prompt.
7. Explain that the buyer story is not "trust the model"; it is "inspect the controls."
