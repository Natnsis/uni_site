import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Schedule = [
  {
    day: "monday",
    breakFast: "firfir",
    lunch: "Ater kik",
    dinner: "misir / injera",
  },
  {
    day: "tuesday",
    breakFast: "sls / bread",
    lunch: "shiro injera",
    dinner: "therefore / injera",
  },
  {
    day: "wednsday",
    breakFast: "firfir",
    lunch: "Ater kik",
    dinner: "misir / injera",
  },
  {
    day: "thursday",
    breakFast: "firfir",
    lunch: "Ater kik",
    dinner: "misir / injera",
  },
  {
    day: "friday",
    breakFast: "firfir",
    lunch: "Ater kik",
    dinner: "misir / injera",
  },
  {
    day: "saturday",
    breakFast: "firfir",
    lunch: "Ater kik",
    dinner: "misir / injera",
  },
  {
    day: "sunday",
    breakFast: "firfir",
    lunch: "Ater kik",
    dinner: "misir / injera",
  },
];

export function CafeTable() {
  return (
    <Table>
      <TableCaption>Current cafeteria schedule shown to students</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Days</TableHead>
          <TableHead>Breakfast</TableHead>
          <TableHead>Lunch</TableHead>
          <TableHead>Dinner</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Schedule.map((items, index) => (
          <TableRow key={index}>
            <TableCell className="capitalize">{items.day}</TableCell>
            <TableCell>{items.breakFast}</TableCell>
            <TableCell>{items.lunch}</TableCell>
            <TableCell>{items.dinner}</TableCell>
            <TableCell className="flex gap-5 justify-center">
              <Button variant="destructive">
                <Trash />
              </Button>
              <Button>
                <Pencil />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
