import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props);
  //     this.state={...}
  // }
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0
    }
  };

  addIngredienthandler = type => {};
  removeIngredientHandler = type => {};

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}
export default BurgerBuilder;
