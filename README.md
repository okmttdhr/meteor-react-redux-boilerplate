# [Meteor React Redux Boilerplate](https://github.com/okmttdhr/meteor-react-redux-boilerplate)

**A boilerplate to use React + Redux with Meteor** Inspired from <a href="https://github.com/davezuko/react-redux-starter-kit" target="_blank">react-redux-starter-kit</a> and <a href="https://github.com/zhongqf/meteor-react-redux-example" target="_blank">meteor-react-redux-example</a>.

* <a href="http://meteor-react-redux-boilerplate.meteor.com/" target="_blank">Demo</a>
* <a href="http://qiita.com/okmttdhr/items/8fc7c28c1887fa70a5a3" target="_blank">Article(in Japanese)</a>


# Features

* <a href="https://github.com/meteor/meteor/" target="_blank">Meteor</a>
* <a href="https://github.com/facebook/react" target="_blank">React</a>
* <a href="https://github.com/rackt/react-router" target="_blank">React Router</a>
* <a href="https://github.com/rackt/redux" target="_blank">Redux</a>
* <a href="https://github.com/babel/babel" target="_blank">Babel</a>
* <a href="https://github.com/webpack/webpack" target="_blank">Webpack</a>
* <a href="https://github.com/mochajs/mocha" target="_blank">Mocha</a>



# Getting Started

## Development

At `.client` directory for the first time

```bash
$ npm install
```

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

run your application at `localhost:3000`



## .client directory

### `npm start`

watch your files with webpack with debug tool

### `npm run build`

### `npm run deploy`

deploy your application to the web

### `npm run ios`

run your application with iOS simulator

### `npm test`

test your application with mocha

### `npm run eslint`



## Alias

`.client` folder's alias is available like this

```javascript
import someAction from 'dir_src/actions/someAction';
```



# Structure

```bash
├── index.html
├── .client           # client application code
├── .meteor
├── client
│   └── bundle.js     # bundled file by webpack
└── lib
    └── models
        └── todo.js
```

In `.client` folder, almost same structure as <a href="https://github.com/davezuko/react-redux-starter-kit" target="_blank">react-redux-starter-kit</a>. **You can develop Meteor application just like an usual Single Page Application with webpack for the web**.

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

And you can easily update MongoDB like below.

```javascript
Todos.update(action.id, {$set: {text: action.text}});
```


## Future List

- [ ] test MongoDB
- [ ] delete autopublish
- [ ] delete insecure
- [ ] add Meteor accounts system
- [ ] server side rendering
- [ ] improve npm command
- [ ] improve deploy and hosting




## License

MIT
