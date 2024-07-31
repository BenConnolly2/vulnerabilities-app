import ReactDOM from 'react-dom';
import VulnerabilityDetails from './VulnerabilityDetails';
import { ModalProps } from '../types/modalProps';

export default function Modal({ isOpen, onClose, vulnerability }: ModalProps) {
  if (!isOpen || !vulnerability) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <VulnerabilityDetails vulnerability={vulnerability} />
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded mt-4">
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}

