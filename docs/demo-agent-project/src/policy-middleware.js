const ALLOWED_DOMAINS = new Set(['api.example.invalid', 'crm.example.invalid', 'localhost'])
const DENIED_PATHS = [/^\.env$/, /^secrets\//, /^\.ssh\//, /^\/etc\//]

export function inspectRequest(request) {
  const declaredIntent = request.declared_intent || 'support_ticket_review'
  const prompt = `${request.prompt || ''}`.toLowerCase()
  const targetUrl = request.target_url ? new URL(request.target_url) : null
  const requestedPath = request.requested_path || ''

  if (/ignore previous|system prompt|jailbreak|instruction override/.test(prompt)) {
    return decision(request, declaredIntent, 'prompt_injection', 'block_system_prompt_extraction', 'DENY')
  }

  if (/pastebin|upload secrets|send secrets|credential_access|exfiltration/.test(prompt)) {
    return decision(request, declaredIntent, 'credential_exfiltration', 'block_secret_or_private_file_reads', 'DENY')
  }

  if (DENIED_PATHS.some(pattern => pattern.test(requestedPath))) {
    return decision(request, declaredIntent, 'private_file_read', 'block_secret_or_private_file_reads', 'DENY')
  }

  if (targetUrl && !ALLOWED_DOMAINS.has(targetUrl.hostname)) {
    return decision(request, declaredIntent, 'untrusted_network_egress', 'deny_untrusted_domain', 'QUARANTINE')
  }

  if (/refund|payment|delete account|legal request/.test(prompt)) {
    return decision(request, declaredIntent, 'high_risk_business_action', 'route_refunds_to_human_review', 'HUMAN_REVIEW')
  }

  return decision(request, declaredIntent, declaredIntent, 'allow_support_read_only', 'ALLOW')
}

function decision(request, declaredIntent, detectedIntent, matchedRule, policyAction) {
  return {
    request_id: request.request_id || 'req_demo_001',
    trace_id: request.trace_id || 'trace_demo_001',
    actor_id: request.actor_id || 'demo_user',
    declared_intent: declaredIntent,
    detected_intent: detectedIntent,
    matched_rule: matchedRule,
    verdict: policyAction.toLowerCase(),
    policy_action: policyAction,
    deny_reason: policyAction === 'ALLOW' ? '' : `Matched ${matchedRule}`,
    reviewer_state: policyAction === 'HUMAN_REVIEW' ? 'pending' : 'not_required',
    risk_score: policyAction === 'ALLOW' ? 0.12 : 0.91,
  }
}
