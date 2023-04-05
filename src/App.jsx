import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import UsersTable from "./UsersTable";
import UserForm from "./UserForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <UserForm />
        <UsersTable />
      </div>
    </Provider>
  );
}

export default App;
