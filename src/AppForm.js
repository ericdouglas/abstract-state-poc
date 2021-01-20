import React from 'react'

import { useAbstractActions } from './App'

const AppForm = () => {
  const { addItem } = useAbstractActions()

  return <button onClick={() => addItem()}>Add item</button>
}

export default AppForm
