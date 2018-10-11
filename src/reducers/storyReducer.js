// set up types file later so that switch/case checks for variable, not string literal

const initialStoryState = {
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
      // receive whole drawing, set and spread story to action.pay.load.story and user to action.payload.user
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