import React from 'react';

const cardFormat = (object) => {
  const keys = Object.keys(object)
  const cardContents = keys.map((keyname, index) => {
    let key = keyname;
    if(key === "vehicleClass") {
      key = "class"
    } 
    return (
      <p key={index} >{ key.charAt(0).toUpperCase() + key.slice(1) }: { object[keyname] }</p>
    );
  });
  
  return cardContents;
}

export default cardFormat;
