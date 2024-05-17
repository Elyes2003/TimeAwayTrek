import {  Header } from "./layout";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App dark:bg-gray-800">
      <Header/>
      <AllRoutes/>

    </div>
  );
}

export default App;
