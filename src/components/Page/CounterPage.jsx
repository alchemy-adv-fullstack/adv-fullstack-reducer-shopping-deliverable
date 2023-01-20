import { useReducer } from 'react';

const initialState = {
  counter1: 0,
  counter2: 0,
};

// Action: Description of event (data/object).
const reducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  if (action.type === 'add') {
    return {
      ...state,
      // action.counter: 1
      // key 'counter1'
      [`counter${action.counter}`]: state.counter1 + action.amount,
    };
  } else if (action.type === 'minus') {
    return {
      ...state,
      counter1: state.counter1 - action.amount,
    };
  } else {
    console.error('Do not know how to handle action', action);
    return state;
  }
};

export default function CounterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <form>
      <span>{state.counter1}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: 'add', amount: 2, counter: '1' });
        }}
      >
        + 2
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: 'add', amount: 1 });
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: 'minus', amount: 1 });
        }}
      >
        -
      </button>
    </form>
  );
}
