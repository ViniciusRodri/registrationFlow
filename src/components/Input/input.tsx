import styles from './input.module.css'

interface IInputProps {
  name: string;
  placeholder: string;
  type: string;
  value: any;
  onChange: any;
}

export default function Input({ name, placeholder, type, onChange, value }: IInputProps) {
  return (
    <input required className={styles.input} name={name} placeholder={placeholder}
      type={type} value={value} onChange={onChange} />
  )
}