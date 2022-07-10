// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { createInsult } from '../../lib/swears';

interface Insult {
  insult: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Insult>
) {

  const insult = createInsult();

  res.status(200).json(insult);
}

