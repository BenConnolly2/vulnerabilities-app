export function getSeverityClass(severity: string): string {
  switch (severity.toUpperCase()) {
    case 'CRITICAL':
      return 'bg-red-600 text-white';
    case 'HIGH':
      return 'bg-orange-600 text-white';
    case 'MEDIUM':
      return 'bg-yellow-400 text-black';
    case 'LOW':
      return 'bg-green-500 text-white';
    case 'INFO':
      return 'bg-blue-500 text-white';
    default:
      return '';
  }
}
