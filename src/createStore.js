export default function createStore(reducer) {
  let state
  state = reducer(state,"@@INIT")

  let dispatch = (action) => {
    state = reducer(state,action),
    render()
  }

  let getState = () => {
    return state
  }

  return {
    getState,
    dispatch
  }
}

function render() {
  const container = document.getElementById('container');
}
