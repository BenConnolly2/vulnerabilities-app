import { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import VulnerabilityTable from '../components/VulnerabilityTable'
import { fetchVulnerabilities } from '../services/api'
import type { Vulnerability } from '../types/vulnerability'

export default function HomePage() {
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const handleFetchData = async () => {
    setLoading(true)
    try {
      const response = await fetchVulnerabilities()
      setVulnerabilities(response.data)
    } catch (error) {
      console.error('Error scanning for vulnerabilities: ', error)
    } finally {
      setLoading(false)
    }
  }

  return(
    <>
      <Header title="VScan Dashboard">
        <Button classString="" label="Start Scan" onClick={handleFetchData}/>
      </Header>
      {loading ? (
        <div> Scanning for Vulnerabilities .... </div>
      ) : (
        vulnerabilities.length > 0 && <VulnerabilityTable vulnerabilities={vulnerabilities} />

      )}
    </>
  )
}
