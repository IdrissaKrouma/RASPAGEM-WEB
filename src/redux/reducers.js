import { combineReducers } from 'redux';


const initialColorState = {
  backGroundColor: false,
};

const colorReducer = (state = initialColorState, action) => {
  switch (action.type) {
    case 'SET_BACK_GROUND_COLOR':
      return { ...state, backGroundColor: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  color: colorReducer,
});

export default rootReducer;
