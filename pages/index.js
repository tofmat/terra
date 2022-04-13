import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import DefiTerra from "../components/defiTera";
import Footer from "../components/footer";
import FrictionlessAccess from "../components/frictionlessAccess";
import GenuisWebapp from "../components/genuisWebapp";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import OptimizedInterest from "../components/optimizedInterest";
import TheMedia from "../components/theMedia";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    const settingUp = false;
    const instances = [];
    const goToSection = (i) => {
      gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        duration: 1,
      });
    };

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => {
            goToSection(i);
          },
        })
      );
      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          start: "bottom bottom",
          onEnterBack: () => {
            goToSection(i);
          },
        })
      );
    });
  }, []);

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
        {/* <Header /> */}
        <div className="panel one" ref={heroRef}>
          <HeroSection />
        </div>
        <div className="panel two" ref={heroRef}>
          <OptimizedInterest />
        </div>
        <div className="panel three" ref={heroRef}>
          <GenuisWebapp />
        </div>
        <div className="panel four" ref={heroRef}>
          <FrictionlessAccess />
        </div>
        <div className="panel five" ref={heroRef}>
          <DefiTerra />
        </div>
        <div className="panel six" ref={heroRef}>
          <TheMedia />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
