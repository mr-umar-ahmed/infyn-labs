export default {
  name: 'applicant',
  title: 'Internship Applicants',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string', readOnly: true },
    { name: 'email', title: 'Email', type: 'string', readOnly: true },
    { name: 'role', title: 'Applied Role', type: 'string', readOnly: true },
    { name: 'resume', title: 'Resume/CV', type: 'file', readOnly: true },
    { name: 'github', title: 'GitHub/Portfolio', type: 'url', readOnly: true },
  ],
}