 import React from 'react';
 import Header from './Components/Header/Header';
 import './App.css'
 import Navbar from './Components/Navbar/Nav';
 import {useState} from 'react';
 import Request from './Helpers/Request';
 import Results from './Components/Results/Results';
 const App = () => {
  const [SelectedOption,setSelectedOption] = useState(Request.fetchTrending);
  console.log(SelectedOption);
  return (
    <div className = "app">
      <Header/>
      <Navbar setSelectedOption = {setSelectedOption}/>
      <Results selectedOption = {SelectedOption}/>
    </div>
  );
 };
 export default App;