import { observable } from "mobx";

const Cities = [
    'Amsterdam',
    'London',
    'Madrid'
  ];
  
  export const createStore = () => {
    const store = {
      get allCities() {
        return Cities;
      },
    };
  
    return store;
  };
  
  export type TStore = ReturnType<typeof createStore>