import Calendar from "@/components/Calendar"

const page = () => {
  return (
    <main className="h-screen p-5 flex flex-col">
      <h1 className="font-bold text-2xl">Cafeteria schedule</h1>
      <p className="text-sm text-gray-400">
        Stay updated with daily meals,
        serving times, and special menus all in one place.
      </p>
      <Calendar />
    </main>
  )
}

export default page
