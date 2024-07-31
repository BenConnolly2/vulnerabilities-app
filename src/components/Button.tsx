import { ButtonProps } from '../types/buttonProps.js'

export default function Button({label, classString, onClick} : ButtonProps ) {
  return(
    <button
      className={`px-4 py-2 rounded ${classString}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
