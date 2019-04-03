import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);
// store.subscribe(() => {
//     console.log(store.getState());
// });

export default store;