import { Provider } from "react-redux";
import { MainUi } from "./components/MainUi";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainUi />
      {/* <DataFetcher /> */}
    </Provider>
  );
}
