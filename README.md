# Meteor React Redux Boilerplate

A boilerplate to use React + Redux with Meteor.

Inspired from <a href="https://github.com/davezuko/react-redux-starter-kit" target="_blank">react-redux-starter-kit</a> and <a href="https://github.com/zhongqf/meteor-react-redux-example" target="_blank">meteor-react-redux-example</a>.



# Features

* <a href="https://github.com/meteor/meteor/" target="_blank">Meteor</a>
* <a href="https://github.com/facebook/react" target="_blank">React</a>
* <a href="https://github.com/rackt/react-router" target="_blank">React Router</a>
* <a href="https://github.com/rackt/redux" target="_blank">Redux</a>
* <a href="https://github.com/babel/babel" target="_blank">Babel</a>
* <a href="https://github.com/webpack/webpack" target="_blank">Webpack</a>

## Coming Soon

* <a href="https://github.com/karma-runner/karma" target="_blank">Karma</a>



# Getting Started

```bash
$ git clone https://github.com/okmttdhr/meteor-react-redux-boilerplate.git
$ cd meteor-react-redux-example
$ cd .client/ && npm run build && cd ../
$ meteor
```

## Development

```bash
$ cd .client/ && npm run dev
```

open a new tab and

```bash
$ meteor
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

In `.client` folder, almost same structure as <a href="https://github.com/davezuko/react-redux-starter-kit" target="_blank">react-redux-starter-kit</a>. But there are some differences.

## Models

You can use `Model` in `views` folder, here is example in `.client/views/HomeView`.

```javascript
mixins: [ReactMeteorData],

getMeteorData() {
  return {
    todos: Todos.find({}).fetch(),
  };
},
```

Now you can read data with `this.data.todos` in React Component, and it's automatically reactive in all tabs by ReactMeteor. That's why I don't use `redux state` to get datas from MongoDB.

And you can easily update MongoDB like below in `.client/reducers/Todo/index.js`.

```javascript
Todos.update(action.id, {$set: {text: action.text}});
```
