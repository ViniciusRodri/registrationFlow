import styles from '../styles/Login.module.css'

import LoginCard from "../src/components/LoginCard/loginCard";
import Input from '../src/components/Input/input';
import Button from '../src/components/Button/buton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { setCookie } from 'cookies-next';

export default function Login() {
  const [formData, setFormData] = useState({

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
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()

      if (response.status !== 200) throw new Error(json)

      setCookie('autorization', json)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.background}>
      <LoginCard title='Login 😀'>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input name='email' placeholder='Email' type='email' value={formData.email}
            onChange={(e: any) => handleFormEdit(e, 'email')} />
          <Input name='password' placeholder='Password' type='password' value={formData.password}
            onChange={(e: any) => handleFormEdit(e, 'password')} />
          <Button>Login</Button>
          {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

          <Link href='/register' >Don't have an account yet? Register here!</Link>
        </form>
      </LoginCard>

    </div>
  )
}