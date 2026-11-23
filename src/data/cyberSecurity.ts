import { ClipboardCheck, Lock, Search, Server, Shield } from 'lucide-react';
import type { ProcessStep, Service } from '../types/content';

export const cyberSecurityServices: Service[] = [
  {
    slug: 'vulnerability-assessment-penetration-testing-vapt',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    description:
      'Proactive ethical hacking and deep security scanning to uncover exploitable weaknesses across your web platforms, APIs, and authentication flows before attackers do.',
    icon: Shield,
    accent: 'brand',
    image: '/cybersecurity/vapt.jpg',
    overview:
      'Our Vulnerability Assessment & Penetration Testing (VAPT) engagements combine automated reconnaissance with manual ethical hacking simulations to validate real-world exploitability and deliver clear, developer-ready remediation steps.',
    features: [
      'Identify security vulnerabilities.',
      'Ethical hacking simulations.',
      'Test website and API security.',
      'Identify SQL injection, XSS, authentication weaknesses.',
      'Receive a security assessment report.',
    ],
    benefits: [
      'Detect critical SQL injection, cross-site scripting, and broken access paths before release',
      'Prioritize engineering fixes using severity ratings and reproducible proof-of-concept steps',
      'Protect customer accounts and business data from credential stuffing and session hijacking',
      'Demonstrate verified security due diligence to enterprise clients and auditors',
    ],
    technologies: ['OWASP Top 10', 'PTES Methodology', 'API Fuzzing', 'Manual Exploitation', 'Remediation Verification'],
  },
  {
    slug: 'web-application-security-testing',
    title: 'Web & Application Security Testing',
    description:
      'End-to-end application security audits covering customer-facing websites, backend APIs, Android and iOS mobile apps, payment gateways, and underlying source code.',
    icon: Lock,
    accent: 'violet',
    image: '/cybersecurity/web-app-security.jpg',
    overview:
      'Modern web and mobile applications expose complex APIs and payment workflows. We test both running applications and source code to eliminate logic flaws, insecure integrations, and data leakage.',
    features: [
      'Website security assessment.',
      'Backend/API security testing.',
      'Android and iOS application testing.',
      'Payment gateway security assessment.',
      'Secure code reviews.',
    ],
    benefits: [
      'Secure checkout flows, webhook signatures, and payment gateway integrations against tampering',
      'Harden REST and GraphQL APIs against broken object-level authorization and rate-limit abuse',
      'Protect Android and iOS builds against insecure storage, weak certificate validation, and token leaks',
      'Catch architectural and injection bugs early with targeted secure code reviews',
    ],
    technologies: ['OWASP ASVS', 'OWASP MASVS', 'SAST & DAST', 'Payment Security', 'Secure SDLC'],
  },
  {
    slug: 'server-network-cloud-security',
    title: 'Server, Network & Cloud Security',
    description:
      'Comprehensive infrastructure hardening for production servers, firewalls, cloud workloads, internal networks, and wireless access points.',
    icon: Server,
    accent: 'jade',
    image: '/cybersecurity/server-network-cloud.jpg',
    overview:
      'A single misconfigured port, overly permissive IAM role, or exposed service can compromise an entire environment. We review your servers, firewalls, cloud posture, and wireless networks from edge to core.',
    features: [
      'Server security configuration reviews.',
      'Firewall security assessments.',
      'Cloud security reviews.',
      'Network vulnerability assessments.',
      'Wireless network security.',
    ],
    benefits: [
      'Lock down server configurations, SSH access, privilege boundaries, and exposed services',
      'Tighten firewall rulesets, network segmentation, and cloud IAM permissions',
      'Eliminate rogue wireless access points and weak Wi-Fi encryption across office networks',
      'Establish repeatable hardening baselines aligned with industry benchmarks',
    ],
    technologies: ['CIS Benchmarks', 'Firewall Auditing', 'Cloud IAM Review', 'Network Segmentation', 'WPA3 / Wireless Security'],
  },
  {
    slug: 'digital-forensics-incident-response',
    title: 'Digital Forensics & Incident Response',
    description:
      'Rapid containment, root-cause cyberattack investigation, malware analysis, email forensics, data recovery, and forensically sound evidence preservation.',
    icon: Search,
    accent: 'brand',
    image: '/cybersecurity/digital-forensics.jpg',
    overview:
      'When an incident occurs, speed and evidence integrity matter equally. Our incident response and digital forensics team helps contain unauthorized access, trace attack paths, recover critical data, and preserve artifacts.',
    features: [
      'Malware investigations.',
      'Investigate unauthorized access.',
      'Email-related forensic investigations.',
      'Data recovery.',
      'Investigate cyberattacks and preserve digital evidence.',
    ],
    benefits: [
      'Stop active intrusions quickly while preserving verifiable logs and forensic artifacts',
      'Uncover how attackers gained entry, including compromised credentials and phishing vectors',
      'Analyze suspicious binaries, persistence mechanisms, and tampered email headers',
      'Recover affected business records safely and prevent repeat compromises',
    ],
    technologies: ['DFIR Triage', 'Malware Analysis', 'Email Forensics', 'Log Reconstruction', 'Chain of Custody'],
  },
  {
    slug: 'cybersecurity-compliance-risk-management',
    title: 'Cybersecurity Compliance & Risk Management',
    description:
      'Structured IT risk assessments, ISO 27001 ISMS readiness reviews, actionable security policies, and business continuity and disaster recovery evaluations.',
    icon: ClipboardCheck,
    accent: 'violet',
    image: '/cybersecurity/compliance-risk.jpg',
    overview:
      'Strong security governance turns technical controls into measurable organizational resilience. We assess operational risks, review ISO 27001-aligned management systems, and ensure continuity plans hold up under pressure.',
    features: [
      'IT risk assessments.',
      'ISO 27001-related ISMS reviews.',
      'Security policy development.',
      'Security readiness assessments.',
      'Business continuity and disaster recovery reviews.',
    ],
    benefits: [
      'Identify high-impact IT and operational risks with prioritized mitigation roadmaps',
      'Prepare your Information Security Management System (ISMS) for ISO 27001 audits',
      'Establish practical security policies that engineering and operations teams can follow',
      'Verify backup integrity, RTO/RPO targets, and disaster recovery readiness before an outage strikes',
    ],
    technologies: ['ISO/IEC 27001', 'ISMS Governance', 'IT Risk Matrix', 'Security Policies', 'BCP & DR Testing'],
  },
];

export const cyberSecurityProcessSteps: ProcessStep[] = [
  {
    title: 'Scope & Threat Model',
    description: 'Map critical applications, APIs, cloud assets, and compliance boundaries before testing begins.',
  },
  {
    title: 'Simulate & Inspect',
    description: 'Run controlled VAPT probes, infrastructure configuration audits, and forensic or risk reviews.',
  },
  {
    title: 'Prioritized Report',
    description: 'Deliver clear findings with severity levels, reproducible evidence, and step-by-step fixes.',
  },
  {
    title: 'Harden & Verify',
    description: 'Support remediation with your engineering team and re-test patches to confirm closure.',
  },
];
