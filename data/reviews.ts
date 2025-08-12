export interface Review {
  id: number;
  name: string;
  occupation: string;
  location: string;
  daysAgo: string;
  description: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Nick P.",
    occupation: "Student",
    location: "New York",
    daysAgo: "1 week ago",
    description: "Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah M.",
    occupation: "Teacher",
    location: "California",
    daysAgo: "3 days ago",
    description: "Had a terrible migraine and couldn't go to work. The service was incredibly fast and the doctor was very understanding. Got my note within 10 minutes!",
    rating: 5
  },
  {
    id: 3,
    name: "Mike R.",
    occupation: "Engineer",
    location: "Texas",
    daysAgo: "2 weeks ago",
    description: "Food poisoning hit me hard and I needed immediate documentation. The process was smooth, professional, and I had my work note ready in no time.",
    rating: 5
  }
];
