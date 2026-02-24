import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const ConcernsTable = () => {

  const concern = [
    {
      "title": "Slow query performance on course search",
      "category": "Database",
      "priority": "High",
      "status": "In Progress",
      "submittedBy": "db_admin",
      "date": "2026-02-23",
      "vote": 19,
      "action": "Add compound index to 'name' and 'courseCode' in MongoDB"
    },
    {
      "title": "JWT secret exposed in client-side bundle",
      "category": "Security",
      "priority": "Critical",
      "status": "Resolved",
      "submittedBy": "security_bot",
      "date": "2026-02-24",
      "vote": 0,
      "action": "Moved secrets to .env and updated Next.js config"
    },
    {
      "title": "Express server crashes on large file uploads",
      "category": "Backend",
      "priority": "High",
      "status": "Open",
      "submittedBy": "user_44",
      "date": "2026-02-21",
      "vote": 7,
      "action": "Implement Multer storage limits and stream to GridFS"
    },
    {
      "title": "Tailwind JIT compiler not picking up dynamic classes",
      "category": "UI/UX",
      "priority": "Low",
      "status": "Under Review",
      "submittedBy": "frontend_dev",
      "date": "2026-02-18",
      "vote": 5,
      "action": "Whitelist dynamic class names in tailwind.config.js safelist"
    },
    {
      "title": "Inconsistent date formatting across timezones",
      "category": "Internationalization",
      "priority": "Medium",
      "status": "Planned",
      "submittedBy": "global_user",
      "date": "2026-02-19",
      "vote": 11,
      "action": "Standardize on ISO 8601 strings using date-fns"
    },
    {
      "title": "Redundant API calls on React component re-render",
      "category": "Performance",
      "priority": "Medium",
      "status": "Planned",
      "submittedBy": "perf_guru",
      "date": "2026-02-22",
      "vote": 14,
      "action": "Implement React Query (TanStack) for caching and fetching"
    },
    {
      "title": "MySQL connection pool exhausted under load",
      "category": "Database",
      "priority": "High",
      "status": "In Progress",
      "submittedBy": "backend_lead",
      "date": "2026-02-24",
      "vote": 9,
      "action": "Increase pool limit and verify connection release in middleware"
    }
  ]
  return (
    <div>
      <div className="flex">
        <Input className="w-1/2" placeholder="search by title..." />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">No.</TableHead>
            <TableHead className="font-bold">Title</TableHead>
            <TableHead className="font-bold">Submitted by</TableHead>
            <TableHead className="font-bold">Vote</TableHead>
            <TableHead className="font-bold">Category</TableHead>
            <TableHead className="font-bold">Priority</TableHead>
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {concern.map((c, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{c.title}</TableCell>
              <TableCell className="text-xs">{c.submittedBy}</TableCell>
              <TableCell className="text-center">{c.vote}</TableCell>
              <TableCell>
                <Badge variant='destructive'>{c.category}</Badge>
              </TableCell>
              <TableCell>
                <Badge>
                  {c.priority}
                </Badge>
              </TableCell>
              <TableCell>{c.date}</TableCell>
              <TableCell>dlee</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ConcernsTable
