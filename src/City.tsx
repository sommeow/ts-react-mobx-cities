import React from 'react';
import { useObserver } from 'mobx-react';
import { storeContext } from './Context';

export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
    return (
      <ul>
        {cities.map(city => <li>{city}</li>)}
      </ul>
    );
  }
  
  export const CityList = () => {
    const store = React.useContext(storeContext);
    if (!store) throw Error("Store shouldn't be null");
    return useObserver(() => {
        return <CityView cities={store.allCities} />
    });
  }
  
  export default CityList;

