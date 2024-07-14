const redux = require("redux");
const produce = require('immer').produce
const createStore = redux.createStore;

const initialState = {
  name: "Martin",
  address: {
    street: "Vitosha str",
    city: "Sofia",
    state: "SF",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };
    
    return produce(state, (draft) => {
        draft.address.street = action.payload
    })

    default: {
        return state;
    }
  }
};

const store = redux.createStore(streetReducer)
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(()=> {
    console.log("Updated state", store.getState());
})

store.dispatch(updateStreet('Kliment Ohridski street'))
unsubscribe()
