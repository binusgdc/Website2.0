import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        /**
         * Cuma bisa diakses dengan method GET
         * kalau mau diakses dengan method lain, tinggal ganti aja ke "POST", "DELETE", dll.
         */
        res.status(200).json({ time: new Date(Date.now()).toString() })
    }
}
