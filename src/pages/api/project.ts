// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {   
    const response = await fetch('http://localhost:3001/api/projects');
    const data = await response.json();
    res.status(200).json(data);
  }
}
