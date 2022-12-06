import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
