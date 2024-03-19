import React from 'react';
import '../assets/App.css';
import ItemHolder from '../components/ItemHolder';

const Homepage: React.FC = () => {
  return (
    <section className='items-container'>
      <ItemHolder />
    </section>
  );
};

export default Homepage;
