import Head from "next/head";
import DetallesContent from "../components/DetallesContent";

export default function Detalles() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Detalles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetallesContent />
    </div>
  );
}
