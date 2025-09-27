import { useState } from 'react';

const Questionnaire = () => {
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 1, name: 'Earrings' },
    { id: 2, name: 'Body Sprays' },
    { id: 3, name: 'Watches' },
    { id: 4, name: 'Bracelets' },
    { id: 5, name: 'Necklaces' },
    { id: 6, name: 'Perfumes' },
  ];

  return (
    <section className='questionnaire'>
      <h2>Products you enjoy using the most?</h2>
      {!submitted ? (
        <div className='questionnaire-options'>
          {categories.map((item) => (
            <button
              key={item.id}
              className='poll-btn'
              onClick={() => setSubmitted(true)}
            >
              {item.name}
            </button>
          ))}
        </div>
      ) : (
        <div className='poll-message'>
          <p>We have your poll ✅</p>
        </div>
      )}
    </section>
  );
};

export default Questionnaire;
