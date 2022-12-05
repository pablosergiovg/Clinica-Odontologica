import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const {state} = useContext(ContextGlobal)

  const theme = createTheme({
    palette: {
      mode: 'light'
      // mode: (state.prefersDark? 'dark':'light')
    }
  })

  return (
      <div className="App">
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Navbar/>
          <Outlet />
          <Footer/>
        </ThemeProvider>
      </div>
  );
}

export default App;