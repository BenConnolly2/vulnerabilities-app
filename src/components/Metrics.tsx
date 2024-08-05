import ThreatScore from './ThreatScore'
import { MetricsProps } from '../types/metricsProps'

export default function Metrics({data, children} : MetricsProps ) {
  return(
    <div className="flex flex-row gap-2 max-h-96 overflow-hidden">
      <ThreatScore data={data}/>
      {children}
    </div>
  )
}
