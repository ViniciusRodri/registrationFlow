import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.screen}>
      <h1>Login Page</h1>
      <div style={{ display: 'flex', gap: '10px' }}>

        <Link className={styles.button} href='/login'>Login</Link>
        <Link className={styles.button} href='/register'>Register</Link>
      </div>
    </div>
  )
}
