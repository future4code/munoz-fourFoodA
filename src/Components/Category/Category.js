import React, { useState } from "react";
import { CategoryContainer } from "./styled";
import { Typography } from '@material-ui/core';

const Category = (props) => {
  const { categoria, setChoice,choice } = props;
 
  const handleClick = ( el) => {
    if (choice === el){
        setChoice("")
    }else{
        setChoice(el);
    }
}
  const listadeCategoria = categoria.map((el) => {
    return < >
    <Typography color={choice===el ? "primary" : ""}  margin="normal" onClick={() => handleClick(el)}>{el}</Typography> </>
  });
  return <CategoryContainer>{listadeCategoria}</CategoryContainer>;
};

export default Category;


