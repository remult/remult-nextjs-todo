// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { api, Task } from '../../src/server/api'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const remult = await api.getRemult(req);

    res.status(200).json({ result: await remult.repo(Task).count() })
}
