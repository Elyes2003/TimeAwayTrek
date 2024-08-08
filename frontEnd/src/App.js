
import { Toaster } from "react-hot-toast";
import {  Header } from "./layout";
import { ToastProvider } from "./layout/toaster";
import { AllRoutes } from "./routes/AllRoutes";


function App() {
  return (
    <div className="App dark:bg-gray-800">
      <ToastProvider>
        <Toaster position="top-center"/>
      <Header/>
      <AllRoutes/>
      </ToastProvider>

    </div>
  );
}

export default App;
