import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Catalog: React.FC = () => {
    const state = useSelector(state => state);

    console.log(state);
  return (
      <h1>Hello World</h1>
  );
}

export default Catalog;