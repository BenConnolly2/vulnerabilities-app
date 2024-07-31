import ReactDOM from 'react-dom';
import VulnerabilityDetails from './VulnerabilityDetails';
import { ModalProps } from '../types/modalProps';

export default function Modal({ isOpen, onClose, vulnerability }: ModalProps) {
  if (!isOpen || !vulnerability) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-85 flex justify-center items-center rounded-lg">
      <div className="bg-white p-8 rounded shadow-lg w-3/4 max-w-lg">
        <VulnerabilityDetails vulnerability={vulnerability} />
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600">
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}

