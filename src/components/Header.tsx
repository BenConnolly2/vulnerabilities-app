import { HeaderProps } from '../types/headerProps'
import logo from '../assets/images/header-logo.png';

export default function Header({title, children} : HeaderProps ) {
  return (
    <header
      className="bg-slate-500 shadow-md rounded-lg flex justify-center items-center text-center bg-cover bg-center mx-auto"
      style={{ backgroundImage: `url(${logo})`, width: '512px', height: '512px' }}
    >
    <div className="bg-black bg-opacity-50 p-4 rounded-lg">
      <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
        {children}
      </div>
    </header>
  )
}


