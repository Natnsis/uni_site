import { ChartAreaLegend } from "./graph/chart-area-legend"
import { ChartRadialStacked } from "./graph/chart-radial-stacked"

const Anlytics = () => {
  return (
    <div className="my-5 flex gap-5">
      <div className="w-full">
        <ChartAreaLegend />
      </div>
      <div className="w-full ">
        <ChartRadialStacked />
      </div>
    </div>
  )
}

export default Anlytics
