import Head from "next/head";
import ServiciosContent from "../components/ServiciosContent";

export default function Servicios() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServiciosContent />
    </div>
  );
}
