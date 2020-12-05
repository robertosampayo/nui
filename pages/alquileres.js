import Head from "next/head";
import AlquileresContent from "../components/AlquileresContent";

export default function Alquileres() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Alquileres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AlquileresContent />
    </div>
  );
}
