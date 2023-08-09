import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import RandomPage from "./components/RandomPage";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark", "theme-transition");
    } else {
      document.documentElement.classList.remove("dark", "theme-transition");
    }
  }, [theme]);

  return (
    <>
      <Intro />
      <div className={`theme-transition`}>
        <ThemeButton theme={theme} handleThemeSwitch={handleThemeSwitch} />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<RandomPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
