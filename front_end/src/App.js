import React, { useState } from "react";
import Director from "./components/Director";
import SeniorManger from "./components/SeniorManager";
import JuniorManager from "./components/JuniorManager";
import SeniorDeveloper from "./components/SeniorDeveloper";
import JuniorDeveloper from "./components/JuniorDeveloper";
import Header from "./components/Header";
import { getPositionById } from "./API/GetPositionById";



function App() {
  const [update, setUpdate] = useState('');
  const updated = async (value) => {
    console.log(value);
    if(value){
      const { data } = await getPositionById(value)
      setUpdate(data.data[0].positionTitle)
    }
    
  }
  return (
    <>
      <Header value={updated} />
      <br />
      <Director value={update} updated={updated} />
      <br />
      <SeniorManger value={update} updated={updated} />
      <br />
      <JuniorManager value={update} updated={updated} />
      <br />
      <SeniorDeveloper value={update} updated={updated} />
      <br />
      <JuniorDeveloper value={update} updated={updated} />
      <br />
    </>
  );
}


export default App;
