import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Box from './Boxes';
import World from './World'
import Logos from './Global';
import Imges from './Image';
import Improve from'./Improve';
import Footer from './Footer ';
import './App.css';

const tab1=[
  {
    backcolor:'#00ccb1' , 
    title: 'For patients',
    paragraph: 'Find a doctor, book a visit and solve any health-related doubt',
    image: 'https://www.docplanner.com/img/screen-marketplace@2x.png',
    country : ['CHOOSE COUNTRY','ARGENTINA','AUSTRALIA','BRAZIL','CHINE',
    'COLOMBIA','CZECH','FRANCE','ITALY','MEXICO','PERU','POLAND','PORTUGAL',
    'SPAIN','TURKEY','UK']
  },
  {    
      backcolor:'#3d83df',
      title: 'For doctors',
      paragraph: 'Save time managing visits and cut no-shows by half',
      image: 'https://www.docplanner.com/img/screen-saas@2x.png',
      
    }
]


class App extends Component {




  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <div className="Each-Box">
        {tab1.map((el, i) => <Box Box={el} key={i}/>)}
        </div>
        <Logos/>
        <World/>
        <Improve/>
        <Imges/>
        <Footer/>
       
      </div>
    );
  }
}



export default App;
