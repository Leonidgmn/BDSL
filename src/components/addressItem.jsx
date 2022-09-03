import React from 'react'


const AddressItem = ({
  place = '',
  locationAndDance = [],
  setActiveAdress = () => {},
  setActiveDance = () => {}
}) => {
  
  const onAdressClick = () => {
      setActiveAdress(place);
    
      

      for (let i=0; i<=locationAndDance.length; i++) {
        if (place === locationAndDance[i].adress) {
          setActiveDance(locationAndDance[i].dance1[0])
        }}

  }

  return (
    <a onClick={onAdressClick} href="#" className='address-item active first'>
      <span
          className='text-address-item'>{place}</span>
      <span className="btnBefore"></span>
      <span className="btnAfter"></span>
    </a> 
  )
}

export default AddressItem;
