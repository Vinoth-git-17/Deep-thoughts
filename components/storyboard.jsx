import React from 'react'
import data from '../data/data.json'
const assets_data= data["tasks"][0]["assets"][0] ;
const tasks_data=data["tasks"][0]
const storyboard = (props) => {
  return (
    
    
<div className='card-box'>
    <div className='card-title'>
       <h2 className='asset-title'>
         {[props.title]}
       </h2>
       
    </div>
    <div className='card-details'>
       <h2 className='asset-descrip'><b>Description:</b>{props.description}</h2>
       <video className='asset-content' controls>
       <source src={assets_data['asset_content']} type="video/mp4"/>
       <source src={assets_data['asset_content']} type="video/ogg"/>
       </video>
    </div>
</div>
  )
}

export default storyboard