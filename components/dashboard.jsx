import React from 'react'
import data from '../data/data.json'
const dashboard = () => {
    const assets_data= data["tasks"][0]["assets"][0] ;
    const tasks_data=data["tasks"][0]
  return (
    

    <div>
        <h1 className='sub-text'>{ assets_data["asset_title"]}</h1>
        <button className='btn'>Submit</button>
        <div className='container'>
                <h1 className='box-heading'>{tasks_data['task_title']}</h1>
                <p className='box-para'>{tasks_data['task_description']}</p>
        </div>
    </div>
  )
}

export default dashboard