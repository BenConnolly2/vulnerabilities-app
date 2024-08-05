import { ThreatScoreProps } from '../types/threatScoreProps'
import DoughnutChart from './DoughnutChart'

export default function ThreatScore({data} : ThreatScoreProps) {
  return(
    <div className="basis-1/4 bg-slate-800 rounded-lg p-2 text-white">
      <h2 className="text-2xl font-bold mb-2">Threat Spread</h2>
      <div className="flex justify-center overflow-visible">
        <DoughnutChart title="Threat Count" inputData={[data.critical, data.high, data.medium, data.low, data.info]} chartLabels={["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"]}/>
      </div>
    </div>
  )
}
