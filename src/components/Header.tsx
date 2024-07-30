import { HeaderProps } from '../types/headerProps'

export default function Header({title, children} : HeaderProps ) {
  return (
    <header className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center max-w-4xl mx-auto">
      <h1 className="text-2xl">{title}</h1>
      {children}
    </header>
  )
}
