import { getCookie } from "cookies-next"
import { verifyToken } from "../services/user"

export default function Dashboard() {
  return (
    <div>
      User Dashboard
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie('autorization', { req, res })
    if (!token) throw new Error('Token invalido')
    verifyToken(token)

    return {
      props: {}
    }

  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {}
    }
  }
}