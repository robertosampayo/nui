import Head from "next/head";
import SofiContent from "../../components/SofiContent";

export default function FiestaSofi() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Fiesta de Sofi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SofiContent />
    </div>
  );
}
