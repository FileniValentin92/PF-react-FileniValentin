import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getProducts().then(products => {
        const productosFiltrados = products
          .filter(prod => prod.stock > 0)
          .filter(product => product.category === category);
        setProducts(productosFiltrados);
      });
    } else {
      getProducts().then(products => {
        const productosFiltrados = products.filter(prod => prod.stock > 0);
        setProducts(productosFiltrados);
      });
    }
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

