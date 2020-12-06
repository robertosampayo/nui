import Head from "next/head";
import FestejaContent from "../../components/FestejaContent";

export default function FestejaTodo() {
  return (
    <div className="container">
      <Head>
        <title>Eventos NUI - Festejá Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FestejaContent />
    </div>
  );
}
