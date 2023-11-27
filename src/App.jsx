import { useState } from "react";
import Form from "./components/Form";
import { Provider } from "react-redux";
import store from "./store/authStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
