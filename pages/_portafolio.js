import Head from "next/head";
import PortafolioContent from "../components/PortafolioContent.js";

export default function Portafolio() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortafolioContent />
    </div>
  );
}
