# React Redux Project
A sample project to understand Redux and React-Redux.

## React
* React is a library used to build user interfaces.

## Redux
* Redux is a predictable state container for JavaScript apps.
* It is a library for managing state in a predictable way in JavaScript applications.

## React-Redux
* React-Redux is the official Redux UI binding library for React.
* React-Redux is a library that provides binding to use React and Redux together in an application.
React <-----> React-Redux <-----> Redux

## Three Core Concepts
### Store (Redux Store / State)
* A `store` holds the state of your application.
* One store for the entire application
* Responsibilities:
  * Holds application state
  * Allows access to state via `getState()`
  * Allows state to be updated via `dispatch(action)`
  * Registers listeners via `subscribe(listener)`
  * Handles unregistering of listeners via the function returned by subscribe(listener)

### Action
* An `action` that describes the changes in the state of the application.
* The only way your application can interact with the store.
* Carry some information from your app to the redux store.
* Plain JavaScript objects
* Hava a 'type' property that indicates the type of action being performed.
* The 'type' property is typically defined as string constants.

### Reducer
* A `reducer` which actually carries out the state transition depending on the action.
* Specify how the app's state changes in response to actions sent to the store.
* Function that accepts state and action as arguments, and returns the next state of the application
* (previousState, action) => newState

## Three Principles
### First Principle
* `The state of your whole application is stored in an object tree within a single store`
* Maintain our application state in a single object which would be managed by the Redux store

### Second Principle
* `The only way to change the state is to emit an action, an object describing what happened`
* To update the state of your app, you need to let Redux know about that with an action
* Not allowed to directly update the state object

### Third Principle
* `To specify how the state tree is transformed by actions, you write pure reducers`
* Reducer - (previousState, action) => newState

## Middleware
* Is the suggested way to extend Redux with custom functionality.
* Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
* Use middleware for logging, crash reporting, performing asynchronous tasks, etc.

## Actions
### Synchronous Actions
* As soon as an action was dispatched, the state is immediately updated.

### Async Actions
* Asynchronous API calls to fetch data from an end point and use that data in your application.

## React Redux + Hooks
* React Redux pattern
* Action creators, reducers, provide the store and connect the components.
* Components can access state and dispatch actions
* React Hooks give function component ability to use local components state, execute side effects, and more
* React Redux v7.1 added hooks
* Hooks can subscribe to store and dispatch actions without connect()