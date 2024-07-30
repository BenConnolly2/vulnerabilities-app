import { ButtonProps } from '../types/buttonProps.js'

export default function Button({label, classString, onClick} : ButtonProps ) {
  return(
    <button className={classString} onClick={onClick}>{label}</button>
  )
}
