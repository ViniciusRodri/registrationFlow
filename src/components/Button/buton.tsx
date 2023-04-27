import { ReactElement } from 'react';
import styles from './button.module.css'

interface IButtonProps {
  children: ReactElement;
}

export default function Button({ children }: IButtonProps) {
  return (
    <button className={styles.button}>{children}</button>
  )
}