import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';
import ListElement from './list_element'

const ProductsSection = (props) => {
    let list = props.list;

  return (
      <div className="card">
        <ul className="list">{
           list.map((el,index)=> {
             if (index<list.length) {return <ListElement element={el} key={`${index}__${el.productId}`}/>}
           })
        } </ul>
      </div>
  )

};

export default ProductsSection;
