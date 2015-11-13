# [Meteor React Redux Boilerplate](https://github.com/okmttdhr/meteor-react-redux-boilerplate)

**A boilerplate to use React + Redux with Meteor.** <a href="http://meteor-react-redux-boilerplate.meteor.com/" target="_blank">Website here</a>.

Inspired from <a href="https://github.com/davezuko/react-redux-starter-kit" target="_blank">react-redux-starter-kit</a> and <a href="https://github.com/zhongqf/meteor-react-redux-example" target="_blank">meteor-react-redux-example</a>.





# Features

* <a href="https://github.com/meteor/meteor/" target="_blank">Meteor</a>
* <a href="https://github.com/facebook/react" target="_blank">React</a>
* <a href="https://github.com/rackt/react-router" target="_blank">React Router</a>
* <a href="https://github.com/rackt/redux" target="_blank">Redux</a>
* <a href="https://github.com/babel/babel" target="_blank">Babel</a>
* <a href="https://github.com/webpack/webpack" target="_blank">Webpack</a>
* <a href="https://github.com/mochajs/mocha" target="_blank">Mocha</a>



# Getting Started

## For the first time

At `.client` directory

```bash
$ npm run build
```

## Run

At root directory

```bash
$ meteor
```

## Development

At `.client` directory

```bash
$ npm start
```

Open a new tab and run `meteor` at root directory

```bash
$ meteor
```



# Usage

## root directory

### `meteor`

## .client directory

### `npm start`

### `npm run build`

### `npm run dev`

### `npm run dev:nw`

### `npm test`

#### `npm run test:unit`

#### `npm run test:unit:watch`

### `npm run eslint`

## Config

Alias available like this

```javascript
import someAction from 'dir_src/actions/someAction';
```

# Structure

```bash
├── README.md
├── .client           # client application code
├── .meteor
├── client
│   └── bundle.js     # bundled file by webpack
├── index.html
└── lib
    └── models
        └── todo.js
```

In `.client` folder, almost same structure as <a href="https://github.com/davezuko/react-redux-starter-kit" target="_blank">react-redux-starter-kit</a>. **You can develop Meteor application just like an usual Single Page Application with Webpack for the web**.

```bash
# in .client folder

├── actions
│   └── Todo.js
├── components
│   ├── TodoAdd.js
│   ├── TodoApp.js
│   ├── TodoEdit.js
│   └── TodoItem.js
├── constants
│   └── index.js
├── containers
│   ├── DevTools.js
│   ├── DevToolsWindow.js
│   └── Root.js
├── initialStates
│   └── index.js
├── layouts
│   └── CoreLayout.js
├── reducers
│   ├── Todo.js
│   └── index.js
├── routes
│   └── index.js
├── store
│   └── configureStore.js
├── styles
│   ├── _base.scss
│   ├── core.scss
│   └── vendor
│       └── _normalize.scss
├── utils
│   └── index.js
├── views
│   └── HomeView.js
├── test
│   ├── actions
│   │   └── todo.js
│   ├── components
│   │   └── todo.js
│   ├── helper
│   │   ├── index.js
│   │   └── mock.js
│   └── index.js
├── config
│   ├── index.js
│   └── webpack.js
├── index.js
├── package.json
└── webpack.config.js
```

But there are some differences. You can use `Model` in React components, here is an example.

```javascript
const HomeView = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      todos: Todos.find({}).fetch(),
    };
  },

  render () {
    return (
      <div className='HomeView'>
        {JSON.stringify(this.data.todos)}
      </div>
    );
  },
});

```

Now you can read data with `this.data.todos` in React Component, and **it's automatically synced to all connected clients in realtime thanks to Meteor and ReactMeteor**. That's why I don't use `redux state` in case getting datas from MongoDB.

And you can easily update MongoDB like below in `.client/reducers/Todo/index.js`.

```javascript
Todos.update(action.id, {$set: {text: action.text}});
```
