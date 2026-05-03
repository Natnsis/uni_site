import UniHeader from "@/components/UniHeader"
import { ReactNode } from "react"

const UniRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen overflow-y-auto">
      <UniHeader />
      {children}
    </main>
  )
}

export default UniRootLayout
