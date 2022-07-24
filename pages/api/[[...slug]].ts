import { NextApiRequest, NextApiResponse } from 'next'
import * as util from 'util';
import { api } from '../../src/server/api';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    await api.handle(_req, res);
}

export default handler