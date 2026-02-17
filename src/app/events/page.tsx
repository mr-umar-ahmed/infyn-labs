import EventsClient from "./EventsClient";
import { createClient } from "next-sanity";

// 1. Configure Sanity Client for Fetching
const client = createClient({
  projectId: "7gb9ayen",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for fresh data
});

// 2. Define the Query
async function getEvents() {
  const query = `*[_type == "event"] | order(_createdAt desc) {
    _id,
    title,
    eventType,
    date,
    mode,
    desc,
    status
  }`;
  return client.fetch(query);
}

export const metadata = {
  title: "Events & Hackathons | Infyn Labs",
  description: "Join the cybersecurity community. Hackathons, workshops, and tech talks.",
};

// 3. The Server Component
export default async function EventsPage() {
  // Fetch data directly on the server
  const events = await getEvents();

  // Pass data to the Client Component
  return <EventsClient initialEvents={events} />;
}