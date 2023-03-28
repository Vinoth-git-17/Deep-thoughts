import React, { useState } from 'react'
import data from '../data/data.json'
const assets_data= data["tasks"][0]["assets"][0] ;
const tasks_data=data["tasks"][0]
const dashboard = (props) => {
  const [toggle, useToggle] = useState(false);
  return (    

    <div>
      <div>
      
     
       <div>

       
        <div className='notice-bg'>
           <h2 className='notice-text' >Notice board</h2>
           <img className='X-icon' src="../images/x-01.png" alt="" />
          
        </div>
       </div>
      </div>
        <h1 className='sub-text'>{props.name}</h1>
        <button className='btn'>Submit</button>
        <div className='container'>
                <h1 className='box-heading'>{props.title}</h1>
                <p className='box-para'>{props.description}</p>
        </div>
        <div  className={`journey-board ${toggle?"journey-toggle":""}`}>
          
          
          <h2 className='journey-text'>Journeyboard</h2>
           <img className={`journey-switch ${toggle?"journey-switch-rotate":""}`} onClick={()=>{useToggle(!toggle)}} src="../images/arrow-r-r.png" alt="" />
          
         
           <div className='journey-bottom'>
             <h2 className='journey-heading'>Explore the world of management</h2>
             <ul className='journey-items'>
               <li>Technical project Management</li>
               <li>Threadbuild</li>
               <li>Structure your pointers</li>
               <li>  4SA Method</li>
             </ul>
           </div>
       </div>
    </div>
  )
}

export default dashboard