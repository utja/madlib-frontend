// set up types file later so that switch/case checks for variable, not string literal
// import { UPDATE_ANIMAL } from '../types';

const initialDrawingState = {
  drawings: [],
  selectedDrawing: []
}
  
export default function drawingReducer(state = initialDrawingState, action) {
  switch(action.type) {
    case 'ADD_USER':
        return { ...state, drawings: action.payload };
    default:
        return state;
  }
}