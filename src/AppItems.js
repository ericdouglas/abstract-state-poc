import React from 'react'

import { useAbstractState, useAbstractActions } from './App'

const AppItems = () => {
  const list = useAbstractState()
  const { toogleItem } = useAbstractActions()

  return list.map((item, index) => (
    <div
      key={item.id}
      style={{ textDecoration: item.done ? 'line-through' : 'underline' }}
      onClick={() => toogleItem({ index })}
    >
      {item.title}
    </div>
  ))
}

export default AppItems
