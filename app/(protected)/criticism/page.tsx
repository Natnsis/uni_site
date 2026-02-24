import ConcernsTable from "@/components/ConcernsTable"

const page = () => {
  return (
    <main className="h-screen p-5">
      <h1 className="text-2xl font-bold">Criticism</h1>
      <p className="w-2/3 text-sm text-gray-600">Monitor, review, and manage student submitted concerns across the platform. Ensure timely responses, maintain transparency, and promote a healthy academic environment.</p>
      <ConcernsTable />
    </main>
  )
}

export default page
