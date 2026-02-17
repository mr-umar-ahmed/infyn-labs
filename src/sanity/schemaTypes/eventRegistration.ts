export default {
  name: 'eventRegistration',
  title: 'Event Registrations',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string', readOnly: true },
    { name: 'email', title: 'Email', type: 'string', readOnly: true },
    { name: 'phone', title: 'Phone Number', type: 'string', readOnly: true },
    { name: 'location', title: 'City / State', type: 'string', readOnly: true },
    { name: 'eventTitle', title: 'Event Name', type: 'string', readOnly: true },
    { name: 'registeredAt', title: 'Registered At', type: 'datetime', initialValue: (new Date()).toISOString() }
  ],
}