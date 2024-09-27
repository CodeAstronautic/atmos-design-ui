import type { NextApiRequest, NextApiResponse } from 'next';

// Define the User type
type User = {
  name: string;
  role: string;
  experience: string;
  skills: string[];
};

// Sample user data
const users: User[] = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
];

// API handler function
export default function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  res.status(200).json(users); // Directly returning the array of users
}
