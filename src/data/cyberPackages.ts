import type { CyberPackage } from '../types/content';

export const cyberPackages: CyberPackage[] = [
{
  id: 'secure-code-review',
  name: 'Secure Code Review',
  description: 'Manual and automated review of your codebase for security flaws before they reach production.',
  priceLKR: 45000,
  includes: [
  'Up to 5,000 lines of code',
  'OWASP Top 10 and secure-coding checks',
  'Secrets and dependency vulnerability scan',
  'Findings report with recommended fixes',
  'One walkthrough call with your developers']

},
{
  id: 'api-security-assessment',
  name: 'API Security Assessment',
  description: 'Focused penetration test of your REST or mobile back-end APIs.',
  priceLKR: 75000,
  includes: [
  'Up to 25 endpoints',
  'Authentication and authorisation (IDOR / BOLA) testing',
  'Input validation and rate-limit checks',
  'OWASP API Security Top 10 coverage',
  'Risk-rated report and one retest']

},
{
  id: 'web-app-pen-test',
  name: 'Web Application Pen Test',
  description: 'Hands-on penetration test of your website or web app, the way a real attacker would approach it.',
  priceLKR: 95000,
  featured: true,
  includes: [
  'Up to 15 pages or user flows',
  'Login, session and access-control testing',
  'Injection, XSS and CSRF testing',
  'Business-logic abuse scenarios',
  'Risk-rated report and one free retest']

},
{
  id: 'full-security-audit',
  name: 'Full Security Audit',
  description: 'Complete review across application, API, code and infrastructure for business-critical systems.',
  priceLKR: 195000,
  includes: [
  'Web application and API pen test',
  'Secure code review of critical modules',
  'Cloud and server configuration review (GCP, OCI, AWS)',
  'Cloudflare / WAF hardening recommendations',
  'Executive summary and two retest rounds']

}];


export const cyberProcess = [
{ title: 'Scope', description: 'We agree targets, rules of engagement and testing windows in writing, then send a custom quote.' },
{ title: 'Reconnaissance', description: 'We map your application, endpoints and attack surface without disrupting users.' },
{ title: 'Testing', description: 'Manual testing backed by automated tools, focused on vulnerabilities that matter to your business.' },
{ title: 'Reporting', description: 'A clear, risk-rated report with proof of concept and step-by-step remediation advice.' },
{ title: 'Retest', description: 'Once fixes are in, we verify them and issue an updated report.' }];


export const cyberCoverage = [
'OWASP Top 10 web vulnerabilities',
'Authentication, session and password handling',
'Access control and privilege escalation',
'SQL injection, XSS and CSRF',
'Exposed secrets, keys and dependencies',
'Server, cloud and Cloudflare misconfiguration'];