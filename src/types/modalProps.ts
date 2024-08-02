import type { Vulnerability } from './vulnerability';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  vulnerability: Vulnerability | null;
}
