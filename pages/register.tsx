import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../src/components/Button/buton";
import Input from "../src/components/Input/input";
import LoginCard from "../src/components/LoginCard/loginCard";
import styles from '../styles/Login.module.css'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState()
  const router = useRouter()

  const handleFormEdit = (e: any, name: any) => {
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()

      if (response.status !== 201) throw new Error(json)

      setCookie('autorization', json)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.background}>
      <LoginCard title='Register 😀'>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input name='name' placeholder='Name' type='name' value={formData.name}
            onChange={(e: any) => handleFormEdit(e, 'name')} />
          <Input name='email' placeholder='Email' type='email' value={formData.email}
            onChange={(e: any) => handleFormEdit(e, 'email')} />
          <Input name='password' placeholder='Password' type='password' value={formData.password}
            onChange={(e: any) => handleFormEdit(e, 'password')} />
          <Button >Register</Button>
          {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
          <Link href='/login'>Already have an account? Login here!</Link>

        </form>
      </LoginCard>

    </div>
  )
}