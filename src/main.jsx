import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const darkMonochromeTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#1a1a1a",
      100: "#333333",
      200: "#4d4d4d",
      300: "#666666",
      400: "#808080",
      500: "#999999",
      600: "#b3b3b3",
      700: "#cccccc",
      800: "#e6e6e6",
      900: "#ffffff",
    },
    background: "#1a1a1a",
    text: "#e6e6e6",
    primary: "#808080",
    secondary: "#999999",
    accent: "#b3b3b3",
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
    <ChakraProvider theme={darkMonochromeTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
