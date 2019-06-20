import React from 'react';
import Select from 'react-select';

class SideNav extends React.Component {
  render(){
    let carObject = []
    carObject = this.props.carList.map((car, index) => {
      return {
        label: car.car_make,
        value: index +1
      }
    })
    
    console.log();
    return (
   
     <div className="bodySideNav">
     <div className="container">
      <Select options={carObject} onChange={
        carObject => {
          this.props.carFn(carObject.label)
        }
        }/>
    </div>
     </div>
    )
  }
}

export default SideNav