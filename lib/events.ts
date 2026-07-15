export interface CircleEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  format: string;
  category: string;
  description: string;
  ceus: number | null;
  rsvp: boolean;
  spots: number | null;
}

export const EVENTS: CircleEvent[] = [
  {
    id: 1,
    title: "Monthly case consultation",
    date: "Thursday, May 1, 2026",
    time: "9:00 – 10:30am",
    format: "Virtual (Zoom)",
    category: "Consultation",
    description: "Our monthly group case consultation. Bring a case you're working with, or come to support peers. Led by Sarah Arnold, LPC-S. Zoom link sent 24 hours before.",
    ceus: 1.5,
    rsvp: true,
    spots: null,
  },
  {
    id: 2,
    title: "Practice building workshop: Setting your fee",
    date: "Wednesday, May 14, 2026",
    time: "12:00 – 1:00pm",
    format: "Virtual (Zoom)",
    category: "Workshop",
    description: "A practical workshop on fee setting, sliding scale considerations, and communicating rates with confidence. Led by Sarah Arnold.",
    ceus: null,
    rsvp: false,
    spots: 20,
  },
  {
    id: 3,
    title: "Trauma-informed care: CEU training",
    date: "Friday, May 23, 2026",
    time: "10:00am – 12:00pm",
    format: "Virtual (Zoom)",
    category: "CEU",
    description: "A 2-hour CEU training on applying trauma-informed principles across clinical presentations. Guest presenter TBD. 2.0 CEU credits.",
    ceus: 2.0,
    rsvp: false,
    spots: 30,
  },
  {
    id: 4,
    title: "Monthly case consultation",
    date: "Thursday, June 5, 2026",
    time: "9:00 – 10:30am",
    format: "Virtual (Zoom)",
    category: "Consultation",
    description: "Monthly case consultation group.",
    ceus: 1.5,
    rsvp: false,
    spots: null,
  },
  {
    id: 5,
    title: "Burnout prevention: clinician self-care",
    date: "Tuesday, June 17, 2026",
    time: "1:00 – 2:30pm",
    format: "Virtual (Zoom)",
    category: "Self-Care",
    description: "A workshop focused on sustainable clinical practice, identifying early burnout signs and building personal structures for longevity.",
    ceus: null,
    rsvp: false,
    spots: 25,
  },
];
