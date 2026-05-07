import SuperHeader from "@/components/SuperHeader"
import { ReactNode } from "react"

const SuperRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SuperHeader />
      {children}
    </div>
  )
}

export default SuperRootLayout
