import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const darkSolarizedTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#fdf6e3",
      100: "#eee8d5",
      200: "#93a1a1",
      300: "#839496",
      400: "#657b83",
      500: "#586e75",
      600: "#073642",
      700: "#002b36",
      800: "#073642",
      900: "#002b36",
    },
    background: "#002b36",
    text: "#839496",
    primary: "#268bd2",
    secondary: "#2aa198",
    accent: "#b58900",
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={darkSolarizedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
