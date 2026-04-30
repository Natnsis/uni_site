'use client'

const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-[#f9fafb] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 90%)",
        }}
      />
      <main className="text-black">
        <section>
          <header className="flex justify-between py-5 px-20">
            <div className="flex gap-20 items-center">
              <h1 className="text-lg font-bold">Uni-Site</h1>
              <nav className="flex gap-8 text-sm">
                <a href="/">Features</a>
                <a href="/">Campus Life</a>
                <a href="/">Testimonials</a>
                <a href="/">Support</a>
              </nav>
            </div>

            <div className="flex gap-10">
              <button className="text-sm">Download App</button>
              <button className="text-sm">Login</button>
            </div>
          </header>
        </section>
      </main>
    </div>
  )
}

export default Landing
