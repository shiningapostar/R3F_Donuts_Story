import About from '@/Components/About/About';
import Menu from '@/Components/Menu/Menu';
import Header from '@/Components/Header/Header';
import Navbar from '@/Components/Navbar/Navbar';
import Reviews from '@/Components/Reviews/Reviews';
import Social from '@/Components/Social/Social';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Donuts Story</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
    </Head>
    <main>
    <Navbar />
    <Header />
    <Menu />
    <About />
    <Social/>
     <Reviews/>
    </main>
    </>
  );
}
