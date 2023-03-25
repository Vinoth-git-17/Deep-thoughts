import { useState } from 'react'
import './App.css'
import Nav from '../components/nav'
import Dashboard from '../components/dashboard'
import Card from '../components/card'
import data from '../data/data.json'
const assets_data= data["tasks"][0]["assets"][0] ;
const tasks_data=data["tasks"][0]
function App() {
 

  return (
 
    <div>
      <Nav />
      <Dashboard/>
      <Card title={assets_data["asset_title"]}/>
      <Card />

   </div>
  )
}

export default App
