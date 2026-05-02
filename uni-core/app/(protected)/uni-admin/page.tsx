'use client'
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="px-5">
      <h1 className="text-4xl">Assosa University</h1>
      <p className="text-gray-600 text-sm ml-2"></p>
    </div>
  )
}

export default Dashboard 
