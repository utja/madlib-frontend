# Ad Scribitum

Combine the fun of Madlibs and the creativity of drawing with Ad Scribitum.

## Demo and Examples

### Demo app on heroku
Check out the app [here](https://ad-scribitum.herokuapp.com).
Signup or login with the guest username and password below.
```
username: guest
password: guestguest
```
### Examples
Choose a template to make a new story.
![create a new story](./examples/story_templates.gif)

Select a story and create a drawing.
![create a new drawing](./examples/create_drawing.gif)

Check out other user stories and drawings!
![view existing drawings](./examples/view_drawings.gif)


## Getting Started

Clone the front end repository and run `npm install`. 

### Prerequisites

Clone the Rails API back end repository - [can be found here](https://github.com/utja/madlib-backend). Follow instructions to install the backend API for this repo.

### Local Installation

Create a `.env` file in the root of this directory and set the API end point to a React environment variable.

Example for Rails localhost port 3000: 
```
REACT_APP_API_ENDPOINT='http://localhost:3000'
```

Run `npm start` to start the local React App.
- Note, the port is set to 3001 in the package.json file.

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The JS framework used
* [Redux](https://redux.js.org/) - State Management
* [Fabric Js](http://fabricjs.com/) - Used to generate canvas drawings
* [Material UI](https://material-ui.com/getting-started/installation/) - React UI framework used to style
* [React Color](https://casesandberg.github.io/react-color/) - Color picker for canvas

## Contributing

### Bug Reports & Feature Requests
Please use the [issue tracker](https://github.com/utja/madlib-frontend/issues) to report any issues or feature requests.
