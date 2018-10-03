// set up types file later so that switch/case checks for variable, not string literal
// import { UPDATE_ANIMAL } from '../types';

// // initial state has empty array of stories, selectedStory is null
// const initialStoryState = {
//   stories: [],
//   selectedStory: null
// }

// test data without backend API
const initialStoryState = {
  // stories: [
  // {
  //   id: 1,
  //   user: 'Jon',
  //   title: 'Hello World 2 - Electric Boogaloo',
  //   story: 'Hello World Jello World Bellow World'
  // },
  // {
  //   id: 2,
  //   user: 'Jack',
  //   title: 'Ad Scribitum rocks',
  //   story: 'Wocka Rocka Flocka story. The end.'
  // },
  // {
  //   id: 3,
  //   user: 'Sean',
  //   title: 'Link n Park is a cooler app',
  //   story: 'The Link n Park app is cooler than this Ad Scribitum App but not cooler than the Linkin Park band.'

  // }],
  stories: [],
  userStories: [],
  selectedStory: null,
  loadingStories: false,
  templates: [],
  failedLoading: false,
  error: null
}

export default function storyReducer(state = initialStoryState, action) {
  switch(action.type) {
    case 'ADD_STORY':
      return { ...state, stories: [...state.stories, action.payload] };
    case 'SET_STORIES':
      return {...state, stories: action.payload }
    case 'SET_USER_STORIES':
      return {...state, userStories: action.payload }
    case 'FAILED_LOADING_STORIES':
      return {...state, error: action.payload, failedLoading: true }
    case 'LOADING_STORIES':
      return { ...state, loadingStories:true }
    case 'LOADED_STORIES':
      return { ...state, loadingStories:false, failedLoading: false }
    case 'SELECT_STORY':
      return {...state, selectedStory: action.payload };
    case 'SELECT_TEMPLATE':
      return {...state, selectedTemplate: action.payload };
    case 'SET_STORY':
      return {...state, selectedStory: action.payload };
      // TODO finish commenting - receive whole drawing, set and spread story to action.pay.load.story and user to action.payload.user
    case 'SET_STORY_IN_DRAWINGS':
      return {...state, selectedStory: {...action.payload.story, user: action.payload.user }};
    case 'UNSELECT_TEMPLATE':
      return {...state, selectedTemplate: null };
    case 'UNSELECT_STORY':
      return {...state, selectedStory: null };
    case 'SET_TEMPLATES':
      return { ...state, templates: action.payload}
    case 'LOGOUT':
      return initialStoryState
    default:
      return state;
  }
}