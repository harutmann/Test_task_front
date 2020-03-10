import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import css from './index.scss';
import ProductsSection from './components/products_list';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const App = () => {
	const[data, setData] = useState(jsonData);

  return (
    <div>
        <ProductsSection list={data}/>
    </div>
  )

};

ReactDOM.render(<App/>,
document.getElementById('root'));
