import React from 'react'


const AddressItem = ({
  place = '',
  sotrNewAllDanceArr = [],
  locationAndDance = [],
  setActiveAdress = () => {},
  setActiveDance = () => {}
}) => {
  
  const onAdressClick = () => {
      setActiveAdress(place);

      const location = locationAndDance.map(loca => {
        const locaAdress = loca.adress;
        return locaAdress
        })
        console.log(location);
    if (place === location[0]) {
        setActiveDance('BACHATA');
    } else if (place === location[1]) {
        setActiveDance('BACHATA');
    } else if (place === location[2]) {
        setActiveDance('KIZOMBA');
    }
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
