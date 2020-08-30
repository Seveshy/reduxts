import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';
import { addProductToCart } from '../store/modules/cart/cart';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]); 

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, [])

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product));
  }, [dispatch])

  return (
    <main>
      {catalog.map(prodcut => (
        <article key={prodcut.id}>
          <strong>{prodcut.title}</strong> {" - "}
          <span>{prodcut.price}</span> {" "}

          <button 
            type="button" 
            onClick={() => handleAddProductToCart(prodcut)}
            >
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
}

export default Catalog;