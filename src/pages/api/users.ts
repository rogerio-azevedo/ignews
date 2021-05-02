import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const result = {
    message: "ok",
  }

  return response.json(result)
}
