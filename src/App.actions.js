const addItem = state =>
  void state.push({
    id: state.length + 1,
    title: `Task ${state.length}`,
    done: false,
  })

const toogleItem = (state, { index }) => {
  state[index].done = !state[index].done
}

const actions = { addItem, toogleItem }

export default actions
