export default {
  name: 'waitlist',
  title: 'LMS Waitlist',
  type: 'document',
  fields: [
    { name: 'email', title: 'Email Address', type: 'string', readOnly: true },
    { name: 'suggestions', title: 'User Suggestions / Features', type: 'text', readOnly: true },
    { 
      name: 'status', 
      title: 'Status', 
      type: 'string', 
      options: { list: ['New', 'Contacted', 'Beta Invited'] },
      initialValue: 'New'
    },
    { name: 'joinedAt', title: 'Joined At', type: 'datetime', initialValue: (new Date()).toISOString() }
  ],
}