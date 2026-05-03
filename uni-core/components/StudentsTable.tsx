'use client'

import { Button } from "./ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { DotsThreeIcon, PencilLineIcon, TrashIcon } from "@phosphor-icons/react"

const StudentsTable = () => {
  const tableData = [
    { id: "ASU-032", name: "Natnael Sisay", date: "Oct 22 2025", status: "Active", invitations: "243", right: "Class Representative" },
    { id: "ASU-033", name: "Bethlehem Tekle", date: "Oct 23 2025", status: "Active", invitations: "120", right: "Student" },
    { id: "ASU-034", name: "Yonas Alemu", date: "Oct 24 2025", status: "Inactive", invitations: "45", right: "Student" },
    { id: "ASU-035", name: "Selamawit Girma", date: "Oct 25 2025", status: "Active", invitations: "89", right: "Club Leader" },
    { id: "ASU-036", name: "Dawit Kassaye", date: "Oct 26 2025", status: "Active", invitations: "312", right: "Student" },
    { id: "ASU-037", name: "Amarech Belay", date: "Oct 27 2025", status: "Pending", invitations: "12", right: "Student" },
    { id: "ASU-038", name: "Elias Tesfaye", date: "Oct 28 2025", status: "Active", invitations: "156", right: "Assistant Rep" },
    { id: "ASU-039", name: "Tigist Mulugeta", date: "Oct 29 2025", status: "Active", invitations: "201", right: "Student" },
    { id: "ASU-040", name: "Samuel Gebre", date: "Oct 30 2025", status: "Inactive", invitations: "0", right: "Student" },
    { id: "ASU-041", name: " Kalkidan Yohannes", date: "Oct 31 2025", status: "Active", invitations: "77", right: "Student" },
    { id: "ASU-042", name: "Abel Kebede", date: "Nov 01 2025", status: "Active", invitations: "134", right: "Student" },
    { id: "ASU-043", name: "Rahel Solomon", date: "Nov 02 2025", status: "Pending", invitations: "5", right: "Student" },
    { id: "ASU-044", name: "Henok Daniel", date: "Nov 03 2025", status: "Active", invitations: "290", right: "Sports Captain" },
    { id: "ASU-045", name: "Marta Haile", date: "Nov 04 2025", status: "Active", invitations: "118", right: "Student" },
    { id: "ASU-046", name: "Biniyam Assefa", date: "Nov 05 2025", status: "Inactive", invitations: "22", right: "Student" },
    { id: "ASU-047", name: "Tsion Mesfin", date: "Nov 06 2025", status: "Active", invitations: "402", right: "Librarian" },
    { id: "ASU-048", name: "Zelalem Tadesse", date: "Nov 07 2025", status: "Active", invitations: "93", right: "Student" },
    { id: "ASU-049", name: "Frehiwot Negash", date: "Nov 08 2025", status: "Pending", invitations: "18", right: "Student" },
    { id: "ASU-050", name: "Tamrat Bekele", date: "Nov 09 2025", status: "Active", invitations: "210", right: "Student" },
    { id: "ASU-051", name: "Lydia Estifanos", date: "Nov 10 2025", status: "Active", invitations: "145", right: "Student" },
    { id: "ASU-052", name: "Fasil Worku", date: "Nov 11 2025", status: "Active", invitations: "88", right: "Student" },
    { id: "ASU-053", name: "Meaza Getachew", date: "Nov 12 2025", status: "Inactive", invitations: "31", right: "Student" },
    { id: "ASU-054", name: "Surafel Melaku", date: "Nov 13 2025", status: "Active", invitations: "176", right: "Student" },
    { id: "ASU-055", name: "Eden Berhane", date: "Nov 14 2025", status: "Active", invitations: "254", right: "Student" },
    { id: "ASU-056", name: "Kidus Michael", date: "Nov 15 2025", status: "Pending", invitations: "9", right: "Student" },
    { id: "ASU-057", name: "Rekik Tefera", date: "Nov 16 2025", status: "Active", invitations: "122", right: "Student" },
    { id: "ASU-058", name: "Yared Dereje", date: "Nov 17 2025", status: "Active", invitations: "67", right: "Student" },
    { id: "ASU-059", name: "Mahlet Shimelis", date: "Nov 18 2025", status: "Inactive", invitations: "14", right: "Student" },
    { id: "ASU-060", name: "Kirubel Wendimu", date: "Nov 19 2025", status: "Active", invitations: "330", right: "Student" },
    { id: "ASU-061", name: "Saron Efrem", date: "Nov 20 2025", status: "Active", invitations: "198", right: "Student" },
    { id: "ASU-062", name: "Eskinder Girmay", date: "Nov 21 2025", status: "Pending", invitations: "2", right: "Student" },
    { id: "ASU-063", name: "Hana Abate", date: "Nov 22 2025", status: "Active", invitations: "150", right: "Student" },
    { id: "ASU-064", name: "Mikayas Negussie", date: "Nov 23 2025", status: "Active", invitations: "287", right: "Student" },
    { id: "ASU-065", name: "Ruhama Zewde", date: "Nov 24 2025", status: "Inactive", invitations: "10", right: "Student" },
    { id: "ASU-066", name: "Brook Lemma", date: "Nov 25 2025", status: "Active", invitations: "95", right: "Student" },
    { id: "ASU-067", name: "Senait Ayalew", date: "Nov 26 2025", status: "Active", invitations: "212", right: "Student" },
    { id: "ASU-068", name: "Nahom Mesfin", date: "Nov 27 2025", status: "Active", invitations: "180", right: "Student" },
    { id: "ASU-069", name: "Feven Desta", date: "Nov 28 2025", status: "Pending", invitations: "0", right: "Student" },
    { id: "ASU-070", name: "Eyob Moges", date: "Nov 29 2025", status: "Active", invitations: "144", right: "Student" },
    { id: "ASU-071", name: "Bitaniya Adugna", date: "Nov 30 2025", status: "Active", invitations: "305", right: "Student" },
  ];

  return (
    <div>
      <div className="mt-5 flex gap-3">
        <Button>All</Button>
        <Button variant='ghost'>Incomplete</Button>
        <Button variant='ghost'>Overdue</Button>
        <Button variant='ghost'>Ongoing</Button>
        <Button variant='ghost'>Finished</Button>
      </div>
      <div className="mt-5">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell><Input type="checkbox" className="h-4 w-4" /></TableCell>
              <TableHead>Student Id</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Invitation</TableHead>
              <TableHead>Special Right</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((d, index) => (
              <TableRow key={index}>
                <TableCell><Input type="checkbox" className="h-4 w-4" /></TableCell>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.date}</TableCell>
                <TableCell><Badge>{d.status}</Badge></TableCell>
                <TableCell>{d.invitations}</TableCell>
                <TableCell>{d.right}</TableCell>
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

export default StudentsTable
