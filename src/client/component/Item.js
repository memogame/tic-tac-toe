import React from 'react';

const Item = ({value, onItemClick}) => {
  const buttonStyle = {
    height: "100px",
    width: "100px"
  }
  let string = "?";
  switch (value) {
    case 1:
      string = "O";
      break;
    case 2:
      string = "X";
      break;
  }
  return <button disabled={value !== 0} onClick={onItemClick} style={buttonStyle}>{string}</button>
}
export default Item;