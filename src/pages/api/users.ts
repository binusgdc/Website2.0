import { NextApiRequest, NextApiResponse } from "next"

import connect from "../../libs/database"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connect()
}
