import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";

const increase = { type: "INCREASE" };
const decrease = { type: "DECREASE" };
const reset = { type: "RESET" };

const defaultState = {
  count: 0,
  name: "amir",
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "RESET":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(increase);
store.dispatch(increase);
store.dispatch(increase);
store.dispatch(reset);


function App() {
  return (
    <Provider store={store}>
      <Counter state={store.getState()}></Counter>;
    </Provider>
  );
}

export default App;
