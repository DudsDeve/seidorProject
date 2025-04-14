import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { theme } from "@styles/theme";
import { Header } from "@layouts/components/Header";
import { GlobalStyle } from "@styles/global";
import { Sidebar } from "@layouts/components/SideBar";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { Router } from "@router/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
