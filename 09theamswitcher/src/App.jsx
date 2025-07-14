import "./App.css";
import ThemeBtn from "./components/ThemeBtn.jsx";
import { ThemeProvider } from "./contexts/theme.js";
import { useState } from "react";
import Card from "./components/Card.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("Light");

  const LightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  return (
    <ThemeProvider value={{ themeMode, LightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
