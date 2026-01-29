import { Code2, Database, LayoutTemplate, Building2, Stethoscope, GraduationCap, LucideIcon } from "lucide-react";

// 1. Define the specific shape of the data
export interface SoftwareServiceData {
  title: string;
  icon: LucideIcon;
  whatIsIt: string;
  whoIsItFor: string;
  deliverables: {
    title: string;
    desc: string;
  }[];
}

// 2. Apply this type to the export (No more 'any')
export const softwareServices: Record<string, SoftwareServiceData> = {
  "custom-dev": {
    title: "Secure Web Development",
    icon: Code2,
    whatIsIt: "High-performance web applications built on Next.js, React, and Node.js.",
    whoIsItFor: "Startups and Enterprises needing scalable, custom-coded solutions.",
    deliverables: [
      { title: "Source Code", desc: "Clean, documented, and owned by you." },
      { title: "Security Hardening", desc: "OWASP Top 10 protection baked in." },
      { title: "Deployment", desc: "CI/CD setup on AWS/Vercel." }
    ]
  },
  "erp": {
    title: "SME ERP Systems",
    icon: LayoutTemplate,
    whatIsIt: "Centralized dashboard for Inventory, HR, Finance, and CRM.",
    whoIsItFor: "Manufacturing and Retail businesses scaling up.",
    deliverables: [
      { title: "Admin Dashboard", desc: "Role-based access control." },
      { title: "Real-time Analytics", desc: "Sales and stock reporting." },
      { title: "Mobile App", desc: "Optional Flutter app for field staff." }
    ]
  },
  "hospital": {
    title: "Hospital Management",
    icon: Stethoscope,
    whatIsIt: "End-to-end hospital administration system compliant with data laws.",
    whoIsItFor: "Clinics and Multi-specialty Hospitals.",
    deliverables: [
      { title: "Patient Portal", desc: "Appointment booking and history." },
      { title: "Doctor Module", desc: "Prescription and diagnosis logging." },
      { title: "Billing Engine", desc: "Insurance and cash management." }
    ]
  },
  "school": {
    title: "School Management",
    icon: GraduationCap,
    whatIsIt: "Digital campus architecture for modern education institutions.",
    whoIsItFor: "Schools, Colleges, and Coaching Centers.",
    deliverables: [
      { title: "Student IS", desc: "Attendance, Grades, and Fees." },
      { title: "E-Learning", desc: "Video integration and assignment uploads." },
      { title: "Parent App", desc: "Notifications and tracking." }
    ]
  },
  "cloud": {
    title: "Cloud Migration",
    icon: Database,
    whatIsIt: "Moving legacy on-premise software to the secure cloud.",
    whoIsItFor: "Companies with outdated desktop software.",
    deliverables: [
      { title: "Zero Downtime Migration", desc: "Blue/Green deployment strategy." },
      { title: "Cost Optimization", desc: "Auto-scaling architecture." },
      { title: "Backup Strategy", desc: "Automated daily snapshots." }
    ]
  },
  "enterprise": {
    title: "Enterprise Custom",
    icon: Building2,
    whatIsIt: "Bespoke engineering for unique business problems.",
    whoIsItFor: "Corporations with complex workflows not solved by SaaS.",
    deliverables: [
      { title: "Requirement Analysis", desc: "Deep-dive technical scoping." },
      { title: "Microservices", desc: "Decoupled architecture for scale." },
      { title: "SLA Support", desc: "Guaranteed uptime contracts." }
    ]
  }
};