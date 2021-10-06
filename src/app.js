import { Provider } from "react-redux";
import Pokemon from "./components/pokemon";
import rtkStore from "./store-rtk/";

export default () => {
  return (
    <Provider store={rtkStore}>
      <Pokemon />
    </Provider>
  );
};
