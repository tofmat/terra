import Head from "next/head";
import DefiTerra from "../components/defiTera";
import Footer from "../components/footer";
import FrictionlessAccess from "../components/frictionlessAccess";
import GenuisWebapp from "../components/genuisWebapp";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import OptimizedInterest from "../components/optimizedInterest";
import TheMedia from "../components/theMedia";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Terra Treasury</title>
        <meta
          name="description"
          content="Terra Treasury - First Decentralized 3rd Gen. savings Protocol"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HeroSection />
        <OptimizedInterest />
        <GenuisWebapp />
        <FrictionlessAccess />
        <DefiTerra />
        <TheMedia />
        <Footer />
      </main>
    </div>
  );
}
