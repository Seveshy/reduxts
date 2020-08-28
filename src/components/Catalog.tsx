import React, { useState, useEffect } from 'react';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]); 

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, [])

  return (
    <main>
      {catalog.map(prodcut => (
        <article key={prodcut.id}>
          <strong>{prodcut.title}</strong> {" - "}
          <span>{prodcut.price}</span> {" "}

          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
}

export default Catalog;