export type Coder = {
  id: number;
  first_name: string;
  last_name: string;
  avatar_url: string;
  score: number;
};

export const coders = [
  {
    id: 101,
    first_name: "Alice",
    last_name: "Johnson",
    avatar_url: "https://i.pravatar.cc/150?img=1",
    score: 350,
  },
  {
    id: 102,
    first_name: "Bob",
    last_name: "Smith",
    avatar_url: "https://i.pravatar.cc/150?img=2",
    score: 320,
  },
  {
    id: 103,
    first_name: "Emily",
    last_name: "Davis",
    avatar_url: "https://i.pravatar.cc/150?img=5",
    score: 290,
  },
  {
    id: 104,
    first_name: "Michael",
    last_name: "Brown",
    avatar_url: "https://i.pravatar.cc/150?img=4",
    score: 270,
  },
];
