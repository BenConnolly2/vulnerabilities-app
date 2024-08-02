import { HeaderProps } from '../types/headerProps';
import logo from '../assets/images/logo.png';

export default function Header({ title, children }: HeaderProps) {
  return (
    <header className="bg-slate-500 shadow-md rounded-lg flex justify-center items-center text-center bg-cover bg-center mx-auto" style={{ width: '100%', height: '100px' }}>
      <div className="flex items-center justify-between bg-black bg-opacity-50 py-1 px-2 rounded-lg w-full max-w-4xl">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <div>
          {children}
        </div>
      </div>
    </header>
  );
}
