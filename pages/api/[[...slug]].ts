import { NextApiRequest, NextApiResponse } from 'next'
import * as util from 'util';
import { api } from '../../lib/api';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    await util.promisify((api as any))(_req, res);
}

export default handler