import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const burger = (props) => {

  //take the object keys, salad, bacon, cheese, etc, convert to array, map that array and return new array with the amount of elements specified in object value
  //this will return array with eg 2 undefined elements, length of 2, therefore returns 2 of same ingredient

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
          return [...Array(props.ingredients[igKey])]
          .map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} />
          })
        })

        .reduce((arr, el) => {
          return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0){
          transformedIngredients = <p>Please start adding ingredients</p>
        }

        console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>

    </div>

  );
};



export default burger;
