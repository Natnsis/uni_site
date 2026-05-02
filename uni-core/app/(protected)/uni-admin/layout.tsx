import UniHeader from "@/components/UniHeader"
import { ReactNode } from "react"

const UniRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <UniHeader />
      {children}
    </main>
  )
}

export default UniRootLayout
