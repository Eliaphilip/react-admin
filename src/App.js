import { ColourModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme,colorMode] = useMode(); 
  return (<ColourModeContext.provider value ={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
      <main className= "context">
        <Topbar/>
      </main>
    </div>
    </ThemeProvider>
    </ColourModeContext.provider>
  );
}

export default App;
