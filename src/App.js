import React from 'react'

import abstract from './abstract'

import AppItems from './AppItems'
import AppForm from './AppForm'
import actions from './App.actions'

const initialState = [{ id: 1, title: 'Study Elixir', done: false }]

const { Provider, useAbstractState, useAbstractActions } = abstract(
  actions,
  initialState,
  'App'
)

const App = () => (
  <Provider>
    <AppItems />
    <AppForm />
  </Provider>
)

export default App
export { useAbstractActions, useAbstractState }
