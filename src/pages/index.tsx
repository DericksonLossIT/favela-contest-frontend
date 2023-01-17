import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { OurTeam } from "../components/OurTeam";
import { Bio } from "../components/Bio";
import { Events } from "../components/Events";
import { ContactForm } from "../components/ContactForm";
import { Gallery } from "../components/Gallery";
import { SupportSection } from "../components/SupportSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Favela Contest</title>
        <meta
          name="description"
          content="Favela Contest - O Game dos Crias, é um evento esportivo de skateboard voltado para o público das quebradas brasileiras! "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Events />
      <Bio />
      <SupportSection />
      <OurTeam />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
