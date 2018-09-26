// set up types file later so that switch/case checks for variable, not string literal
// import { UPDATE_ANIMAL } from '../types';

const initialDrawingState = {
  drawings: [],
  selectedDrawing: null,
  loadingDrawings: false,
  failedLoading: false,
  error: null
}
  
export default function drawingReducer(state = initialDrawingState, action) {
  switch(action.type) {
    case 'LOADING_DRAWINGS':
        return { ...state, loadingDrawings: true };
    case 'LOADED_DRAWINGS':
        return { ...state, loadingDrawings: false, failedLoading: false };
    case 'SET_DRAWINGS':
        return { ...state, drawings: action.payload };
    case 'SET_DRAWING':
        return { ...state, selectedDrawing: action.payload };
    case 'FAILED_LOADING_DRAWINGS':
        return { ...state, failedLoading: true, error: action.payload };
    default:
        return state;
  }
}