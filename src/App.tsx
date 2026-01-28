import { useEffect, useState } from "react"
import { AuthLeftSection } from "./components/AuthLeftSection"
import { Login } from "./components/Login"

function App() {

  return (
    <section className="h-[100vh] w-[100vw] bg-background">
      <div className="custom-grid h-full">
        <div className="col-span-6">
          <AuthLeftSection />
        </div>
        <div className="col-span-6">
          <Login />
        </div>
      </div>
    </section>
  )
}

export default App
