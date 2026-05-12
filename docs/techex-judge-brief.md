# TechEx Judge Brief

## Project

Agent Security Drill Kit: Trust Evidence Console

## One-Sentence Claim

Agent Security Drill Kit turns an agent demo into a local evidence pack that shows policy, tool boundaries, prompt-injection drills, audit trails, A2A identity, Gemini drill prompts, and the next patch queue before an enterprise reviewer has to ask for them.

## Why This Fits The May 2026 TechEx Window

The event is centered on enterprise-ready AI agents, governance, and production deployment. The current blocker for many agent products is not whether a demo works once; it is whether a buyer, sponsor, or security reviewer can inspect the control plane around the demo. This project ships that inspection layer as a browser-only workbench.

## Judging-Criteria Map

Application of technology:

- Browser File API reads local project evidence without a backend.
- Static scoring engine detects policy, tool, network, filesystem, audit, review, rate-limit, test, CI, secret-handling, A2A, and Gemini-safety signals.
- Export layer generates a policy starter, A2A-style Agent Card, audit schema, adversarial drill prompt, fix queue, and submission summary.

Presentation:

- The 90-second demo uses a safe fixture project with real-looking policy, audit, and drill artifacts.
- The story is simple: inspect the controls before trusting the agent.

Business value:

- Agent teams need faster security review for pilots, demos, hackathons, sponsor reviews, and buyer handoffs.
- This can become a paid launch review, repository scanner, or lightweight governance workbench for teams shipping agents into enterprise workflows.

Originality:

- Most submissions show agent capability. This submission shows the trust artifact around the capability.
- The product combines preflight scoring, A2A identity, policy generation, adversarial prompt generation, audit schema, and prioritized fixes in one local tool.

## Demo Proof Checklist

- App URL: `https://tateprograms.com/agent-security-drill.html`
- Repository: `https://github.com/TateLyman/agent-security-drill-kit`
- Safe fixture: `docs/demo-agent-project`
- Cover image: `docs/media/techex-cover.png`
- Slide deck: `docs/agent-security-drill-kit-techex-pitch.pptx`
- Storyboard: `docs/techex-demo-storyboard.md`
- Field copy: `docs/lablab-field-copy.md`

## The Demo In 6 Steps

1. Open the live app.
2. Load `docs/demo-agent-project`.
3. Show the readiness score and grouped evidence.
4. Open the fix queue and highlight the highest-risk missing control.
5. Copy or download the evidence pack.
6. Show the exported policy starter, A2A Agent Card, audit schema, Gemini drill prompt, and submission summary.

## Risk Boundary

This is a launch-readiness and evidence-preparation tool. It is not an authorization system, penetration-testing tool, or permission to test third-party systems. The fixture uses dry-run behavior, `example.invalid`, localhost, and no real credentials.
