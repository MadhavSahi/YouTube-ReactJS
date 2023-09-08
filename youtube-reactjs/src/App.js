//we don;t require import react now...it;s done in index.js

import Body from "./Components/Body";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoWatchPage from "./Components/VideoWatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <VideoWatchPage />,
      },
    ],
  },
]);

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Header />
        {/* <Body /> */}
        {/* now the appRouter logic will handle the rendering */}
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
};

export default App;
