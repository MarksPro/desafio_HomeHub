import React from 'react';

export default class Card extends React.Component {
  
  render(){
    const cars = this.props.carList;
    const valueClean = +cars.car_value.replace('$', '');
    const value = valueClean.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

     return (
         <li className="carItem">
           <img src='https://via.placeholder.com/260x160/bdbdbd' alt="Produto"/>
           <div>
            <p>Fabricante:  <span>{cars.car_make}</span></p>
            <p>Modelo: <span>{cars.car_model}</span></p>
            <p>Ano: <span>{cars.car_year}</span> </p>
            <p>Preço: <span>{value}</span></p>
           </div>
         </li>
        )
   }
}