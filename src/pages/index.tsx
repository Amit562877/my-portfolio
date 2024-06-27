// pages/index.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import Team from '@/components/Team';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio showcasing our services, technologies, team, recent work, and contact information." />
        <meta name="keywords" content="portfolio, services, technology, team, recent work, contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="pt-16">
        <Intro />
        <Services />
        <Technology />
        <Team />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}