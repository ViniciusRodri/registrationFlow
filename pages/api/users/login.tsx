import { login } from "../../../services/user";

export default function handler(req: any, res: any) {
  try {
    const user = login(req.body)
    res.status(200).json(user)
  } catch (err: any) {
    res.status(400).json(err.message)
  }
}