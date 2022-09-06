import Login from "./components/Login";
import StateProvider from "./contexts/StateProvider";
function App() {
  return (

    <StateProvider>
      <div className="App flex justify-center items-center h-full" style={{ background: 'linear-gradient(#141e30, #243b55) no-repeat' }} >
        <Login />
      </div>
    </StateProvider>
  );
}

export default App;
