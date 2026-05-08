import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { DotsThreeIcon, PencilLineIcon, TrashIcon } from '@phosphor-icons/react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const UniversitiesTable = () => {

   const tableData = [
  {
    id: '123456',
    name: 'University of Gondar',
    location: 'Amhara Gondar Region',
    type: 'Active',
    year: 1954,
    accreditation: 'National',
    ranking: 10,
    campusSize: '2500 hectares',
    tuitionFees: '1500 USD',
    generation: '3rd'
  },
  {
    id: '123457',
    name: 'Addis Ababa University',
    location: 'Addis Ababa',
    type: 'Active',
    year: 1950,
    accreditation: 'National',
    ranking: 1,
    campusSize: '3000 hectares',
    tuitionFees: '1800 USD',
    generation: '1st'
  },
  {
    id: '123458',
    name: 'Bahir Dar University',
    location: 'Amhara Bahir Dar',
    type: 'Active',
    year: 2000,
    accreditation: 'National',
    ranking: 5,
    campusSize: '2200 hectares',
    tuitionFees: '1400 USD',
    generation: '2nd'
  },
  {
    id: '123459',
    name: 'Mekelle University',
    location: 'Tigray Mekelle',
    type: 'Active',
    year: 2001,
    accreditation: 'National',
    ranking: 6,
    campusSize: '2100 hectares',
    tuitionFees: '1300 USD',
    generation: '2nd'
  },
  {
    id: '123460',
    name: 'Hawassa University',
    location: 'Sidama Hawassa',
    type: 'Active',
    year: 1999,
    accreditation: 'National',
    ranking: 4,
    campusSize: '2400 hectares',
    tuitionFees: '1500 USD',
    generation: '2nd'
  },
  {
    id: '123461',
    name: 'Jimma University',
    location: 'Oromia Jimma',
    type: 'Active',
    year: 1997,
    accreditation: 'National',
    ranking: 3,
    campusSize: '2600 hectares',
    tuitionFees: '1600 USD',
    generation: '2nd'
  },
  {
    id: '123462',
    name: 'Arba Minch University',
    location: 'SNNPR Arba Minch',
    type: 'Active',
    year: 2004,
    accreditation: 'National',
    ranking: 8,
    campusSize: '2000 hectares',
    tuitionFees: '1200 USD',
    generation: '2nd'
  },
  {
    id: '123463',
    name: 'Dire Dawa University',
    location: 'Dire Dawa City',
    type: 'Active',
    year: 2006,
    accreditation: 'National',
    ranking: 12,
    campusSize: '1800 hectares',
    tuitionFees: '1100 USD',
    generation: '3rd'
  },
  {
    id: '123464',
    name: 'Adama Science and Technology University',
    location: 'Oromia Adama',
    type: 'Active',
    year: 1993,
    accreditation: 'National',
    ranking: 7,
    campusSize: '2300 hectares',
    tuitionFees: '1700 USD',
    generation: '2nd'
  },
  {
    id: '123465',
    name: 'Wollega University',
    location: 'Oromia Nekemte',
    type: 'Active',
    year: 2007,
    accreditation: 'National',
    ranking: 14,
    campusSize: '1700 hectares',
    tuitionFees: '1000 USD',
    generation: '3rd'
  },
  {
    id: '123466',
    name: 'Wollo University',
    location: 'Amhara Dessie',
    type: 'Active',
    year: 2007,
    accreditation: 'National',
    ranking: 15,
    campusSize: '1600 hectares',
    tuitionFees: '1000 USD',
    generation: '3rd'
  },
  {
    id: '123467',
    name: 'Debre Berhan University',
    location: 'Amhara Debre Berhan',
    type: 'Active',
    year: 2007,
    accreditation: 'National',
    ranking: 13,
    campusSize: '1500 hectares',
    tuitionFees: '950 USD',
    generation: '3rd'
  },
  {
    id: '123468',
    name: 'Debre Markos University',
    location: 'Amhara Debre Markos',
    type: 'Active',
    year: 2005,
    accreditation: 'National',
    ranking: 11,
    campusSize: '1750 hectares',
    tuitionFees: '1050 USD',
    generation: '3rd'
  },
  {
    id: '123469',
    name: 'Mizan Tepi University',
    location: 'SNNPR Mizan Teferi',
    type: 'Active',
    year: 2006,
    accreditation: 'National',
    ranking: 16,
    campusSize: '1400 hectares',
    tuitionFees: '900 USD',
    generation: '3rd'
  },
  {
    id: '123470',
    name: 'Dilla University',
    location: 'SNNPR Dilla',
    type: 'Active',
    year: 2006,
    accreditation: 'National',
    ranking: 9,
    campusSize: '1900 hectares',
    tuitionFees: '1150 USD',
    generation: '3rd'
  }
];

  return (
    <div>
      <div className="mt-5 flex justify-between">
        <div className="flex gap-3">
          <Button>All</Button>
          <Button variant='ghost'>Incomplete</Button>
          <Button variant='ghost'>Overdue</Button>
          <Button variant='ghost'>Ongoing</Button>
          <Button variant='ghost'>Finished</Button>
        </div>

        <div className="flex gap-3 items-center">
          <Input className="border-2" placeholder="search for student..." />

          <div className="flex gap-2 items-center">
            <p className="text-xs">Status:</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='Active'>Active</SelectItem>
                  <SelectItem value='Inactive'>Inctive</SelectItem>
                  <SelectItem value='Pending'>Pending</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-5 items-center">
            <p className="text-xs">Invitation:</p>
            <Input className="w-15 border-2 text-center" placeholder="10" />
          </div>

          <Button><TrashIcon /></Button>
        </div>

      </div>
      <div className="mt-5">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell><Input type="checkbox" className="h-4 w-4" /></TableCell>
              <TableHead>Name</TableHead>
              <TableHead>Location (City, Country)</TableHead>
              <TableHead>Type (Public / Private)</TableHead>
              <TableHead>Year Established</TableHead>
              <TableHead>Accreditation / Recognition</TableHead>
              <TableHead>National Ranking</TableHead>
              <TableHead>Campus Size</TableHead>
              <TableHead>Tuition Fees (per year)</TableHead>
              <TableHead>Generation</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((d, index) => (
              <TableRow key={index}>
                <TableCell><Input type="checkbox" className="h-4 w-4" /></TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.location}</TableCell>
                <TableCell>{d.type}</TableCell>
                <TableCell>{d.type}</TableCell>
                <TableCell><Badge>{d.accreditation}</Badge></TableCell>
                <TableCell>{d.year}</TableCell>
                <TableCell>{d.campusSize}</TableCell>
                <TableCell>{d.tuitionFees}</TableCell>
                <TableCell>{d.generation}</TableCell>
                <TableCell className="flex gap-1 justify-center">
                  <Button variant='outline'><PencilLineIcon /></Button>
                  <Button variant='destructive'><TrashIcon /></Button>
                  <Button variant='ghost'><DotsThreeIcon /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UniversitiesTable