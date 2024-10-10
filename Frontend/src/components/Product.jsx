// import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';

function Product() {
  return (
    <div className="flex flex-wrap justify-center">
      {list.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Product;
