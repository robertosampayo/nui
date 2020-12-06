import Head from "next/head";
import MomentosContent from "../../components/MomentosContent";

export default function MomentosImportantes() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Momentos Importantes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MomentosContent />
    </div>
  );
}
