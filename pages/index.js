import Head from "next/head";
import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import dynamic from "next/dynamic";
import DefiTerra from "../components/defiTera";
import Footer from "../components/footer";
import FrictionlessAccess from "../components/frictionlessAccess";
import GenuisWebapp from "../components/genuisWebapp";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import OptimizedInterest from "../components/optimizedInterest";
import TheMedia from "../components/theMedia";

const Home = () => {
  const ScrollContainer = dynamic(
    () => import("react-scroll-motion").then((mod) => mod.ScrollContainer),
    { ssr: false }
  );

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
        <ScrollContainer>
          <ScrollPage page={0}>
            <div>
              <Animator animation={batch(Fade(), Sticky())}>
                <HeroSection />
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage page={1}>
            <Animator animation={batch(Fade(), Sticky())}>
              <OptimizedInterest />
            </Animator>
          </ScrollPage>

          <ScrollPage page={2}>
            <Animator animation={batch(Fade(), Sticky())}>
              <GenuisWebapp />
            </Animator>
          </ScrollPage>

          <ScrollPage page={3}>
            <Animator animation={batch(Fade(), Sticky())}>
              <FrictionlessAccess />
            </Animator>
          </ScrollPage>

          <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky())}>
              <DefiTerra />
            </Animator>
          </ScrollPage>

          <ScrollPage page={5}>
            <Animator animation={batch(Fade(), Sticky())}>
              <TheMedia />
            </Animator>
          </ScrollPage>
        </ScrollContainer>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
