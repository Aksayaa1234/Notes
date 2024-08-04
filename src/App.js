import { useState } from 'react';
import Drawerleft from './components/Drawerleft';
import Navbar from './components/Navbar'
import Inputs from './components/Inputs';

function App() {
  let [draw,Setdraw]=useState(false);
  let [input,SetInput]=useState(false);
  const OpenDrawer=()=>{
    Setdraw(true);
  }
  const CloseDrawer=()=>{
    Setdraw(false);
  }
  const OpenInput=()=>{
    SetInput(true);
  }
  const CloseInput=()=>{
    console.log(input);
    SetInput(false);
  }
  return (
    <>
    <Navbar OpenD={OpenDrawer} OpenI={OpenInput}></Navbar>
    <Drawerleft Draw={draw} Close={CloseDrawer}></Drawerleft>
    <Inputs Input={input}  Close={CloseInput}></Inputs>
    </>
  );
}

export default App;
