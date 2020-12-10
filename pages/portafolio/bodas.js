import Head from "next/head";
import BodasContent from "../../components/BodasContent";

export default function Bodas() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Bodas y recepciones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodasContent />
    </div>
  );
}
