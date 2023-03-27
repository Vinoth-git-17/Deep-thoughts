import { useState } from "react";
import "./App.css";
import React from "react";
import Nav from "../components/nav";
import Dashboard from "../components/dashboard";
import Card from "../components/card";
import data from "../data/data.json";
const assets_data = data["tasks"][0]["assets"][0];
const tasks_data = data["tasks"][0];
const assets_array = data["tasks"][0]["assets"];

function App() {
  return (
    <div className="app">
      <Nav />

      {/* <Card 
      title={assets_data['asset_title']}
      description= { assets_data["asset_description"]}
      link={assets_data['asset_content']}
      /> */}

      <div className="wrapper">
        {assets_array.map((asset) => {
          return (
            <Card
              key={asset.asset_id}
              title={asset.asset_title}
              description={asset.asset_description}
              link={asset.asset_content}
              type={asset.asset_content_type}
            />
          );
        })}
      </div>
      <Dashboard
        name={assets_data["asset_title"]}
        title={tasks_data["task_title"]}
        description={tasks_data["task_description"]}
      />
    </div>
  );
}

export default App;
