
import { useState } from "react";
import Switch from "./components/toggleBtn";


function App() {
  const [isToggle,setIsToggle] = useState(false);
 
  return <div className="App">


    {/* MY CUSTOM SWITCH  */}

    <Switch  varient=""  isToggle={isToggle} onToggle={()=> setIsToggle(!isToggle)}  />


  </div>;
}

export default App;
