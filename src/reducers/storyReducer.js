// set up types file later so that switch/case checks for variable, not string literal
// import { UPDATE_ANIMAL } from '../types';

// // initial state has empty array of stories, selectedStory is null
// const initialStoryState = {
//   stories: [],
//   selectedStory: null
// }

// test data without backend API
const initialStoryState = {
  stories: [
  {
    id: 1,
    user: 'Jon',
    title: 'Hello World 2 - Electric Boogaloo',
    story: 'Hello World Jello World Bellow World'
  },
  {
    id: 2,
    user: 'Jack',
    title: 'Ad Scribitum rocks',
    story: 'Wocka Rocka Flocka story. The end.'
  },
  {
    id: 3,
    user: 'Sean',
    title: 'Link n Park is a cooler app',
    story: 'The Link n Park app is cooler than this Ad Scribitum App but not cooler than the Linkin Park band.'

  }],
  selectedStory: null
}

export default function storyReducer(state = initialStoryState, action) {
  switch(action.type) {
    case 'ADD_STORY':
        return { ...state, stories: action.payload };
    default:
        return state;
  }
}