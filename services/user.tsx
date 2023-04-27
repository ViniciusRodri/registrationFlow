import jwt from 'jsonwebtoken'

interface IUserType {
  body: any;
}

let users: any[] = []

const SECRET: any = process.env.JWT_SECRET

function createToken(user: any) {
  return jwt.sign({ email: user.email, name: user.name }, SECRET)
}

function readToken(token: any) {
  try {
    return jwt.verify(token, SECRET)
  } catch (err) {
    throw new Error('Token Invalido')
  }
}

export function verifyToken(token: any) {
  return readToken(token)
}

export function register({ body }: IUserType) {
  const user = users.find(({ email }) => email === body.email)
  if (user) throw new Error('User already exists, try another email')

  users.push(body)

  const token = createToken(body)
  return token
}

export function login({ body }: IUserType) {
  const user = users.find(({ email }) => email === body.email)
  if (!user) throw new Error('User not found')
  if (user.password !== body.password) throw new Error('incorrect password')

  const token = createToken(user)
  return token
}