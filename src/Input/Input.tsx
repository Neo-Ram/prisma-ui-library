import styles from './Input.module.css'

type InputProps = {
    type?: string
    placeholder?: string
}
export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input className={styles.normal} type={type} placeholder={placeholder} />
  )
}
