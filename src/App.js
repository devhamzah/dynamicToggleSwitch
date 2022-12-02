
import { useState } from "react";
import Switch from "./components/toggleBtn";


function App() {
  const [isToggle,setIsToggle] = useState(true);
 
  return <div className="App">
    <Switch varient="over" isToggle={isToggle} onToggle={()=> setIsToggle(!isToggle)}  />
  </div>;
}

export default App;
