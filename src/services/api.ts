import axios from 'axios';
import { VulnerabilityResponse } from '../types/vulnerability';

const VULNERABILITIES_URL = '/vulnerabilities.json'

export const fetchVulnerabilities = async (): Promise<VulnerabilityResponse> => {
  const response = await axios.get<VulnerabilityResponse>(VULNERABILITIES_URL)
  return response.data
}
