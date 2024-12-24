import style from './spinner.module.css'

export default function Spinner() {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
    </div>
  )
}