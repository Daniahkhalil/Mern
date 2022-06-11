
import './App.css';
import { Tab } from './components/Tab';
import React from 'react'

function App() {
  const tabs = [{ name: "Tab1", content: "Tab1 content showing here" },
  { name: "Tab2", content: "Tab2 content showing here" },
  { name: "Tab3", content: "Tab3 content showing here" }]
  return (
    <>
  <Tab tabs={tabs}/>
    </>
  );
}

export default App;
