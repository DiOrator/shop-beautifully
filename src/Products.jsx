// src/Products.jsx
import earrings1 from './images/earrings1.jpg';
import earrings2 from './images/earrings2.jpg';
import spray1 from './images/spray1.jpg';
import spray2 from './images/spray2.jpg';
import chain1 from './images/chain1.jpg';
import chain2 from './images/chain2.jpg';
import clothes1 from './images/clothes1.jpg';
import clothes2 from './images/clothes2.jpg';

export const products = [
  {
    id: 'earrings',
    title: 'Earrings',
    items: [
      { id: 1, image: earrings1 },
      { id: 2, image: earrings2 },
    ],
  },
  {
    id: 'bodysprays',
    title: 'Body Sprays',
    items: [
      { id: 1, image: spray1 },
      { id: 2, image: spray2 },
    ],
  },
  {
    id: 'chains',
    title: 'Chains',
    items: [
      { id: 1, image: chain1 },
      { id: 2, image: chain2 },
    ],
  },
  {
    id: 'clothes',
    title: 'Clothes',
    items: [
      { id: 1, image: clothes1 },
      { id: 2, image: clothes2 },
    ],
  },
];
