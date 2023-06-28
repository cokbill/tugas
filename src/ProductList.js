import React from 'react';

const ProductList = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        const {id, title, img, desc, price} = item;
        return (
            <article key=".." className='menu-item'>
            <img src=".." alt=".." className='photo' />
            <div className='item-info'>
              <header>
                <h4>..</h4>
                <h4 className='price'>..</h4>
              </header>
              <p className='item-text'>..</p>
            </div>
          </article>
        );
      })}
    </div>
  )
};

export default ProductList;
