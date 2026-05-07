import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"

const ScheduleTable = () => {
  const foodSchedule = [
    {
      day: 'Monday',
      food: [
        {
          title: 'Enjera be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera be shay',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
      ]
    },
    {
      day: 'Tuesday',
      food: [
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
      ]
    },
    {
      day: 'Wednesday',
      food: [
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
      ]
    },
    {
      day: 'Thursday',
      food: [
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
      ]
    },
    {
      day: 'Friday',
      food: [
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
      ]
    },
    {
      day: 'Saturday',
      food: [
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
      ]
    },
    {
      day: 'Sunday',
      food: [
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
        {
          title: 'Enjera Be Dabo',
          time: 'March 16 - 22, 2026',
        },
      ]
    },
  ]

  return (
    <div className='h-[90vh] p-5'>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-25 border-x text-center">Days</TableHead>
            <TableHead className="border-x text-center">Breakfast</TableHead>
            <TableHead className="border-x text-center">Lunch</TableHead>
            <TableHead className="border-x text-center">Dinner</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {foodSchedule.map((f, index) => (
            <TableRow key={index}>
              <TableCell className="border-x p-10 text-center">{f.day}</TableCell>
              {f.food.map((ff, index) => (
                <TableCell className="border-x p-10 text-center" key={index}>
                  <div className="mb-5">
                    <h1 className="text-xl">{ff.title}</h1>
                    <p className="text-center font-light">{ff.time}</p>
                  </div>
                  <Button variant='outline'>Update</Button>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ScheduleTable
