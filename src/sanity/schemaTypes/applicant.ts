export default {
  name: 'applicant',
  title: 'Internship Applicants',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'role', title: 'Applied Role', type: 'string' },
    { name: 'linkedin', title: 'LinkedIn Profile', type: 'url' }, // New
    { name: 'github', title: 'GitHub/Portfolio', type: 'url' },
    { name: 'startDate', title: 'Earliest Start Date', type: 'date' }, // New
    { name: 'resume', title: 'Resume (PDF)', type: 'file' },
    { name: 'message', title: 'Statement of Purpose', type: 'text' }, // New
  ],
}