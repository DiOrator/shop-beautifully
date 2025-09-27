import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Questionnaire from './components/Questionnaire';
import Footer from './components/Footer';

import {
  earrings,
  bodysprays,
  watches,
  bracelets,
  necklaces,
  perfumes,
} from './data';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        {/* Correct order: Earrings → Body Sprays → Watches → Bracelets → Necklaces → Perfumes */}
        <ProductSection id='earrings' title='Earrings' items={earrings} />
        <ProductSection
          id='body-sprays'
          title='Body Sprays'
          items={bodysprays}
        />
        <ProductSection id='watches' title='Watches' items={watches} />
        <ProductSection id='bracelets' title='Bracelets' items={bracelets} />
        <ProductSection id='necklaces' title='Necklaces' items={necklaces} />
        <ProductSection id='perfumes' title='Perfumes' items={perfumes} />

        <section className='section'>
          <p className='thanks'>
            Thanks for always patronizing — we appreciate your loyalty and
            support!
          </p>
        </section>

        <Questionnaire />
      </main>
      <Footer />
    </>
  );
}

export default App;
