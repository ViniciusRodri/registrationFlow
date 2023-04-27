
import { ReactElement } from 'react'
import styles from './loginCard.module.css'

interface ICardProps {
  title: string;
  children: ReactElement;
}

export default function LoginCard({ children, title }: ICardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}