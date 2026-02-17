import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Event Title', type: 'string' }),
    defineField({ 
      name: 'eventType', 
      title: 'Event Type', 
      type: 'string',
      options: {
        list: [
          { title: 'Hackathon', value: 'HACKATHON' },
          { title: 'Webinar', value: 'WEBINAR' },
          { title: 'Podcast', value: 'PODCAST' },
          { title: 'Workshop', value: 'WORKSHOP' },
        ],
      }
    }),
    defineField({ name: 'date', title: 'Event Date (Text)', type: 'string', description: 'e.g. "June 20-21, 2026"' }),
    defineField({ name: 'mode', title: 'Mode', type: 'string', initialValue: 'Online' }),
    defineField({ name: 'desc', title: 'Description', type: 'text' }),
    defineField({ 
      name: 'status', 
      title: 'Status', 
      type: 'string',
      options: {
        list: ['Coming Soon', 'Registration Open', 'Live Now', 'Closed'],
      }
    }),
  ],
})