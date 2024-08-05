import { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import VulnerabilityTable from '../components/VulnerabilityTable';
import ResolvedVulnerabilityTable from '../components/ResolvedVulnerabilityTable';
import Metrics from '../components/Metrics';
import Modal from '../components/Modal';

import { fetchVulnerabilities } from '../services/api';
import type { Vulnerability } from '../types/vulnerability';
import { SeverityCounts } from '../types/severityCountsProps';

export default function HomePage() {
  const [resolvedVulnerabilities, setResolvedVulnerabilities] = useState<Vulnerability[]>([]);
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVulnerability, setSelectedVulnerability] = useState<Vulnerability | null>(null);

  const severityCounts: SeverityCounts = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    info: 0,
  };

  const [threatCounts, setThreatCounts] = useState<SeverityCounts>(severityCounts);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchVulnerabilities();
      setVulnerabilities(data.data);
      setThreatCounts(setSeverityCounts(data.data));
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching vulnerabilities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResolveVulnerability = (uuid: string) => {
    setVulnerabilities((prev) =>
      prev.filter((vuln) => {
        if (vuln.uuid === uuid) {
          const updatedVuln = {...vuln, updated_at: new Date().toISOString(), record_to_remove: true}
          setResolvedVulnerabilities((resolved) => [...resolved, updatedVuln]);
          return false;
        }
        return true;
      })
    );
  };

  const handleViewVulnerability = (vuln: Vulnerability) => {
    setSelectedVulnerability(vuln);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVulnerability(null);
  };

  function setSeverityCounts(vulnerabilities: Vulnerability[]): SeverityCounts {
    const counts: SeverityCounts = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      info: 0,
    };

    vulnerabilities.forEach((vulnerability) => {
      switch (vulnerability.severity.toUpperCase()) {
        case 'CRITICAL':
          counts.critical += 1;
          break;
        case 'HIGH':
          counts.high += 1;
          break;
        case 'MEDIUM':
          counts.medium += 1;
          break;
        case 'LOW':
          counts.low += 1;
          break;
        case 'INFO':
          counts.info += 1;
          break;
        default:
          break;
      }
    });

    return counts;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-6">
      <Header title="VScan Dashboard">
        <Button classString="bg-red-500 rounded text-white" label="Start Scan" onClick={handleFetchData} />
      </Header>
      {loading && <div className="text-center">Loading...</div>}
      {showTable &&
      <>
        <Metrics data={threatCounts} >
          <ResolvedVulnerabilityTable
            vulnerabilities={resolvedVulnerabilities}
            onView={handleViewVulnerability}
          />
        </Metrics>
        <VulnerabilityTable
          vulnerabilities={vulnerabilities}
          onResolve={handleResolveVulnerability}
          onView={handleViewVulnerability}
        />
      </>
      }
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} vulnerability={selectedVulnerability} />
    </div>
  );
}
