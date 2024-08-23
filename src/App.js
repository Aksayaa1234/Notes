import { useState } from 'react';
import Drawerleft from './components/Drawerleft';
import Navbar from './components/Navbar'
import Inputs from './components/Inputs';
import Notes from './components/Notes';
import useLocalStorage from './hooks/localStorage';
import { CssBaseline } from '@mui/material';

function App() {
  let [draw,Setdraw]=useState(false);
  let [input,SetInput]=useState(false);
  let [store,Addstore,Removestore]=useLocalStorage("notes_react");
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
    <CssBaseline/>
    <Navbar OpenD={OpenDrawer} OpenI={OpenInput}></Navbar>
    <Drawerleft Draw={draw} Close={CloseDrawer}></Drawerleft>
    <Inputs Input={input}  Close={CloseInput} Add={Addstore}></Inputs>
    <Notes notes={store} Close={Removestore}></Notes>
    </>
  );
}

export default App;
