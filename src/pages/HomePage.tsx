import { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import VulnerabilityTable from '../components/VulnerabilityTable';
import { fetchVulnerabilities } from '../services/api';
import type { Vulnerability } from '../types/vulnerability';

export default function HomePage() {
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(false);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchVulnerabilities();
      setVulnerabilities(data.data);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching vulnerabilities:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-6">
      <Header title="VScan Dashboard">
        <Button classString="bg-red-500 rounded text-white" label="Start Scan" onClick={handleFetchData} />
      </Header>
      {loading && <div className="text-center">Loading...</div>}
      {showTable && <VulnerabilityTable vulnerabilities={vulnerabilities} />}
    </div>
  );
}

