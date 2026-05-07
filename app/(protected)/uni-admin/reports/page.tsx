'use client'
import { ReportBarChart } from "@/components/ReportBarChart"
import { ReportLineChart } from "@/components/ReportLineChart"
import { ReportPieChart } from "@/components/ReportPieChart"
import { ReportsAreaChart } from "@/components/ReportsAreaChart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartPieSliceIcon } from "@phosphor-icons/react"

const page = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-light">An aggregated view of all your timely status.</p>
          <div className="flex gap-3 w-fit items-center">
            <h1 className="text-sm font-light">Select the year: </h1>
            <Select>
              <SelectTrigger
                className="hidden w-40 rounded-lg sm:ml-auto sm:flex bg-secondary"
                aria-label="Select a value"
              >
                <SelectValue placeholder="Select from 2020" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg">
                  2020
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                  2021
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  2022
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  2023
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  2024
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  2025
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  2026
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  2027
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 border w-1/2">
          <div className="border-r flex gap-2 px-2 py-3">
            <div className="border bg-secondary p-3">
              <ChartPieSliceIcon size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">70.42%</h1>
              <p className="text-sm font-light">Bounce Rate</p>
            </div>
          </div>

          <div className="border-r px-2 py-3">
            <h1 className="text-2xl text-center font-bold">13,808</h1>
            <p className="text-sm font-light text-center">Total Visitors</p>
          </div>

          <div className="border-r px-2 py-3">
            <h1 className="text-2xl text-center font-bold">13,808</h1>
            <p className="text-sm font-light text-center">Total Visitors</p>
          </div>

          <div className="px-2 py-3">
            <h1 className="text-2xl text-center font-bold">13,808</h1>
            <p className="text-sm font-light text-center">Total Visitors</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <ReportsAreaChart />
      </div>

      <div className="mt-5 gap-10 h-fit">
        <div className="flex gap-10">
          <div className="w-1/2">
            <ReportBarChart />
          </div>
          <div className="w-1/2">
            <ReportLineChart />
          </div>
        </div>
        <div className="mt-5">
          <ReportPieChart />
        </div>
      </div>
    </div>
  )
}

export default page
