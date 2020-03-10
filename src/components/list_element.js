import 'core-js/es/map';
import 'core-js/es/set';

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const ListElement = (props) => {

    let element = props.element;
    let url = element.primaryImageUrl;

const[value, setValue] = useState(1);
const[priceG, setGoldPrice] = useState((element.priceGoldAlt).toFixed(2));
const[priceR, setRetailPrice] = useState((element.priceRetailAlt).toFixed(2));

  const toggle = (e, unit) => {
    let target = e.target;
    let next = e.target.nextElementSibling;
    let back = e.target.previousElementSibling;

    target.classList.add('unit--active');

    if(unit==='metre'){
      setGoldPrice((element.priceGoldAlt).toFixed(2))
      setRetailPrice((element.priceRetailAlt).toFixed(2))
       next.classList.remove('unit--active');
    }
    if(unit==='pack'){
      setGoldPrice((element.priceGold).toFixed(2))
      setRetailPrice((element.priceRetail).toFixed(2))
      back.classList.remove('unit--active');
     }
  }

  const handleChange=(e)=> {
    const v = (e.target.validity.valid) ? e.target.value : value;
    setValue(+v)
 }

  const countUp = () => {
    setValue(value+1)
  }

  const countDown = () => {
    if(value>0){
      setValue(value-1)
    }
  }


 const  imgUrl = (url) => {
  	let ref = url.split('.');
    let format = ref.splice(2,1)
     return ref.join('.') +'_220x220_1.'+ format
  	}

  const code = (el) => {
      return el.replace(/^0+/, '')
  }

  let assoc = element.assocProducts;
  assoc = assoc.split(';');


  return (
      <li className="list-element">
        {
                 <div className="products_page">

                      <div className="product_code_status__wrapper">
                          <span className="product_code">Код: {code(element.code)}</span>
                          <div className="product_status_tooltip_container">
                              <span className="product_status">Наличие</span>
                          </div>
                      </div>

                      <div className="product_photo">
                          <a href="#" className="url--link product__link">
                              <img src={`https:${imgUrl(url)}`} alt="Изображение товара" width="160" height="160"/>
                          </a>
                      </div>

                      <div className="product_description">
                          <a href="#" className="product__link">{element.title}</a>
                      </div>

                      <div className="product_tags hidden-sm">
                          <p>Могут понадобиться: &nbsp;</p>
                          {assoc.map((el, id) =>{
                            if(el!==""){return <a href="#" className="url--link" key={`${el}__${id}`}>{el};</a>}
                          })}
                      </div>

                      <div className="price__wrapper">

                              <div className="unit--wrapper">
                                  <div className="unit--select unit--active" onClick={(e) => toggle(e, 'metre')}>
                                    За м. кв.
                                  </div>
                                  <div className="unit--select" onClick={(e) => toggle(e, 'pack')}>
                                    За упаковку
                                  </div>
                              </div>

                          <div className="product_price__wrapper">
                              <p className="product_price_club_card">
                                  <span className="product_price_club_card_text">По карте<br/>клуба</span>
                                  <span className="goldPrice">{priceG}</span>
                                  <span className="rouble__i black__i">
                                      <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
                                         <use xlinkHref="http://www.w3.org/1999/xlink" xlinkHref="#rouble_black"></use>
                                      </svg>
                                  </span>
                              </p>

                              <p className="product_price_default">
                                  <span className="retailPrice">{priceR}</span>
                                  <span className="rouble__i black__i">
                                      <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
                                         <use xlinkHref="http://www.w3.org/1999/xlink" xlinkHref="#rouble_gray"></use>
                                      </svg>
                                   </span>
                              </p>
                          </div>

                          <div className="product_price_points">
                              <p className="ng-binding">Можно купить за 231,75 балла</p>
                          </div>

                          <div className="list--unit-padd"></div>
                          <div className="list--unit-desc">
                              <div className="unit--info">
                                  <div className="unit--desc-i"></div>
                                  <div className="unit--desc-t">
                                      <p>
                                          <span className="ng-binding">Продается упаковками:</span><br/>
                                          <span className="unit--infoInn">1 упак. = 2.47 м. кв. </span>
                                      </p>
                                  </div>
                              </div>
                          </div>

                          <div className="product__wrapper">
                              <div className="product_count_wrapper">
                                  <div className="stepper">
                                      <input className="product__count stepper-input" type="text" pattern="[0-9]*" value={value} onChange={handleChange}/>
                                      <span className="stepper-arrow up" onClick={countUp}></span>
                                      <span className="stepper-arrow down" onClick={countDown}></span>
                                  </div>
                              </div>
                              <span className="btn btn_cart" data-url="/cart/" data-product-id={element.productId}>
                                  <svg className="ic ic_cart">
                                     <use xlinkHref="http://www.w3.org/1999/xlink" xlinkHref="#cart"></use>
                                  </svg>
                                  <span className="ng-binding">В корзину</span>
                              </span>
                          </div>
                      </div>
                  </div>
        }
      </li>
  )

};

export default ListElement;
