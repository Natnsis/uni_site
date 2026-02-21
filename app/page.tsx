import Features from "@/components/Features"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Problem from "@/components/Problem"

const page = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default page
