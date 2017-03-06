import React from 'react';

const Item = ({ value, onItemClick }) => {
  const buttonStyle = {
    height: "150px",
    width: "150px",
    fontStyle: "bold",
    textAlign: "center",
    border: "1px solid white",
    color: "white",
    fontSize: "50px",
    display:"table-cell",
    background: "brown",
    verticalAlign:"middle"
  }
  let string = "";
  switch (value) {
    case 1:
      string = "O";
      break;
    case 2:
      string = "X";
      break;
  }
  return <div onClick={value === 0 ? onItemClick : undefined} style={buttonStyle}>{string}</div>
}
export default Item;