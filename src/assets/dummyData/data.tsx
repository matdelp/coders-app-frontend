export type LeaderbordData = {
  rank: number;
  first_name: string;
  last_name: string;
  score: number;
  solved_challenges: number;
};

export const dummyData: LeaderbordData[] = [
  {
    rank: 1,
    first_name: "John",
    last_name: "Doe",
    score: 400,
    solved_challenges: 150,
  },
  {
    rank: 2,
    first_name: "Alice",
    last_name: "Smith",
    score: 350,
    solved_challenges: 140,
  },
  {
    rank: 3,
    first_name: "Emma",
    last_name: "Johnson",
    score: 320,
    solved_challenges: 135,
  },
];
