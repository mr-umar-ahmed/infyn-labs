// src/lib/serviceData.ts
import { Search, Shield, Lock, FileCheck, Terminal, Users, LucideIcon } from "lucide-react";

export type ServiceData = {
  title: string;
  icon: LucideIcon;
  heroText: string;
  whatIsIt: string;
  whoIsItFor: string;
  whyItMatters: string;
  deliverables: {
    title: string;
    desc: string;
  }[];
};

export const cyberServices: Record<string, ServiceData> = {
  "audit": {
    title: "Security Audit & Assessment",
    icon: Search,
    heroText: "We map your entire digital terrain to uncover hidden risks before they become breaches.",
    whatIsIt: "A comprehensive analysis of your infrastructure, cloud configurations, and internal policies.",
    whoIsItFor: "CTOs inheriting legacy systems, or companies preparing for a merger/acquisition.",
    whyItMatters: "You cannot defend what you do not know. 60% of breaches come from unpatched vulnerabilities.",
    deliverables: [
      { title: "Gap Analysis Report", desc: "Detailed breakdown of where your security fails industry benchmarks." },
      { title: "Risk Scoring", desc: "Quantitative scoring of assets to prioritize your defense budget." },
      { title: "Architecture Review", desc: "Topology maps identifying single points of failure." }
    ]
  },
  "pentesting": {
    title: "Penetration Testing",
    icon: Shield,
    heroText: "Simulated cyberattacks by our Red Team to exploit weaknesses before malicious actors do.",
    whatIsIt: "Ethical hacking where we attempt to breach your servers using real-world exploits.",
    whoIsItFor: "Fintechs, Healthcare, and SaaS platforms handling sensitive user data.",
    whyItMatters: "Automated scanners miss logic flaws. Humans find what machines miss.",
    deliverables: [
      { title: "Exploitation Log", desc: "Step-by-step evidence of how we breached your system." },
      { title: "Remediation Guide", desc: "Copy-paste code fixes for your development team." },
      { title: "Re-test Certificate", desc: "Verification that the holes have been successfully closed." }
    ]
  },
  "mssp": {
    title: "Managed Security (MSSP)",
    icon: Lock,
    heroText: "24/7 Surveillance. We watch your network while you sleep.",
    whatIsIt: "Outsourced Security Operations Center (SOC) monitoring your logs in real-time.",
    whoIsItFor: "Enterprises that cannot afford a 12-person in-house security team.",
    whyItMatters: "The average time to detect a breach is 200 days. We bring that down to minutes.",
    deliverables: [
      { title: "24/7 Monitoring", desc: "Eyes on glass, 365 days a year." },
      { title: "Incident Response", desc: "Immediate containment if a threat is detected." },
      { title: "Monthly Intel Reports", desc: "Summary of blocked attacks and threat trends." }
    ]
  },
  "compliance": {
    title: "Compliance & Consulting",
    icon: FileCheck,
    heroText: "Navigate the regulatory maze without slowing down business.",
    whatIsIt: "Strategic consulting to align your ops with ISO 27001, GDPR, SOC2, and HIPAA.",
    whoIsItFor: "Startups expanding to the EU/USA or seeking Enterprise clients.",
    whyItMatters: "Non-compliance results in massive fines and loss of customer trust.",
    deliverables: [
      { title: "Gap Assessment", desc: "Where you stand vs. where the law requires you to be." },
      { title: "Policy Generation", desc: "Writing the documentation required for auditors." },
      { title: "Audit Support", desc: "We sit with you during the external audit." }
    ]
  },
  "dev-security": {
    title: "Security for Developers",
    icon: Terminal,
    heroText: "Shift Left. Secure your code before it ever hits production.",
    whatIsIt: "DevSecOps integration. We plug security tools into your GitHub/GitLab pipelines.",
    whoIsItFor: "Software teams releasing updates frequently (CI/CD).",
    whyItMatters: "Fixing a bug in production costs 100x more than fixing it in development.",
    deliverables: [
      { title: "SAST/DAST Setup", desc: "Automated code scanning tools." },
      { title: "Secret Management", desc: "Removing hardcoded API keys from your repositories." },
      { title: "Secure Coding Workshop", desc: "Training devs to write unhackable code." }
    ]
  },
  "training": {
    title: "Training & Awareness",
    icon: Users,
    heroText: "Patch your human firewall. People are the biggest attack vector.",
    whatIsIt: "Workshops and phishing simulations to train staff against social engineering.",
    whoIsItFor: "Any company with employees who have email access.",
    whyItMatters: "90% of all successful cyberattacks start with a phishing email.",
    deliverables: [
      { title: "Phishing Campaigns", desc: "Fake attacks to test employee vigilance." },
      { title: "Live Hacking Demos", desc: "We show how easy it is to hack a phone to scare them straight." },
      { title: "Risk Report", desc: "Identifying which employees need more training." }
    ]
  }
};