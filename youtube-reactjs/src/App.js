//we don;t require import react now...it;s done in index.js

import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </>
  );
};

export default App;
