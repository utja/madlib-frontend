// set up types file later so that switch/case checks for variable, not string literal
// import { UPDATE_ANIMAL } from '../types';

const initialDrawingState = {
  drawings: [],
  userDrawings: [],
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
    case 'SET_USER_DRAWINGS':
        return { ...state, userDrawings: action.payload };
    case 'SET_DRAWING':
        return { ...state, selectedDrawing: action.payload };
    case 'UNSELECT_DRAWING':
        return { ...state, selectedDrawing: null}
    case 'FAILED_LOADING_DRAWINGS':
        return { ...state, failedLoading: true, error: action.payload };
    case 'LOGOUT':
      return initialDrawingState
    default:
        return state;
  }
}