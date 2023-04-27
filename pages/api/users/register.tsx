import { register } from "../../../services/user";

export default function handler(req: any, res: any) {
  try {
    const newUser = register(req.body)
    res.status(201).json(newUser)
  } catch (err: any) {
    res.status(400).json(err.message)
  }
}