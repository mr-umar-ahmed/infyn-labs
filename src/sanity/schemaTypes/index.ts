import { type SchemaTypeDefinition } from 'sanity'

// 1. The Standard Blog Schemas (Named Exports)
import { blockContent } from './blockContent'
import { category } from './category'
import { post } from './post'
import { author } from './author'
import { event } from './event' // <--- New Import (Named Export)

// 2. Your Custom Schemas (Default Exports)
import serviceRequest from './serviceRequest'
import applicant from './applicant'
import waitlist from './waitlist'
import eventRegistration from './eventRegistration'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Content Engine
    blockContent,
    category,
    post,
    author,
    
    // Business & Community Logic
    serviceRequest,
    applicant,
    waitlist,
    eventRegistration,
    event // <--- Added to the Registry
  ],
}