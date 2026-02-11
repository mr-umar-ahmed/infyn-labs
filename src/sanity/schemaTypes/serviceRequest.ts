export default {
  name: 'serviceRequest',
  title: 'Service Requests',
  type: 'document',
  fields: [
    { name: 'name', title: 'Client Name', type: 'string', readOnly: true },
    { name: 'email', title: 'Email Address', type: 'string', readOnly: true },
    { name: 'service', title: 'Requested Service', type: 'string', readOnly: true },
    { name: 'message', title: 'Project Details', type: 'text', readOnly: true },
    { 
      name: 'status', 
      title: 'Status', 
      type: 'string', 
      options: { list: ['New', 'Contacted', 'Ignored'] },
      initialValue: 'New'
    },
  ],
}