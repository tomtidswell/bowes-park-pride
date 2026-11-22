import { eventsData } from "@/data/events"

/** Splits events into upcoming (soonest first) and past (most recent first). */
export function useEvents() {
  const now = new Date()

  const upcomingEvents = computed(() =>
    eventsData
      .filter((e) => new Date(e.isoDate) >= now)
      .sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()),
  )

  const pastEvents = computed(() =>
    eventsData
      .filter((e) => new Date(e.isoDate) < now)
      .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()),
  )

  return { upcomingEvents, pastEvents }
}
