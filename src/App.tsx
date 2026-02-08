import { useEffect, useState } from "react"
import { MoonStar, Sun } from "lucide-react";
import { RouterFlow } from "./routes/RouterFlow";

function App() {
  const [themeSection, setThemeSection] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const themeTogglerStyle = "custom-grid min-w-30 absolute right-2 top-4 shadow-xl border border-border py-3 rounded-3xl"
  useEffect(() => {
    const handleThemeSection = (event: any) => {
      const threshHoldVal = 10;
      if(window.innerWidth - event.clientX <= threshHoldVal){
        setThemeSection(true);
      }
    }
    window.addEventListener('mousemove', handleThemeSection);
    return () => {
      window.removeEventListener('mousemove', handleThemeSection);
    }
  },[])

  const handleTheme = (theme: string) => {
    if(theme === 'light'){
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      setThemeSection(false);
      return;
    }
    document.documentElement.classList.add("dark");
    setIsDark(true);
    setThemeSection(false);
  }

  return (
    <section className="h-[100vh] w-[100vw] bg-background relative">
      <section className={themeSection ? `${themeTogglerStyle} animation-fade` : `${themeTogglerStyle} opacity-0`}>
        <div className="col-span-6 flex justify-center border-r border-border" onClick={() => {handleTheme("light")}}>
          <Sun className={!isDark ? 'text-primary' : 'text-mutedForeground'}/>
        </div>
        <div className="col-span-6 flex justify-center" onClick={() => {handleTheme("dark")}}>
          <MoonStar className={isDark ? 'text-primary' : 'text-mutedForeground'} />
        </div>
      </section>
      <RouterFlow/>
    </section>
  )
}

export default App
