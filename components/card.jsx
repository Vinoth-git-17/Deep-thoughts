import Video from '../components/video'
import Article from '../components/article'
import Threadbuilder from './threadbuilder'
import React from 'react'
import data from '../data/data.json'
const assets_data= data["tasks"][0]["assets"][0] ;
const tasks_data=data["tasks"][0]
const card =(props) =>{
  return (


    
   <div className='card-box'>
      <div className='card-title'>
         <h2 className='asset-title'>
         {[props.title]}
         </h2>
         <img className='asset-icon' src="../images/iicon.png" alt="" />
         
      </div>
      <div className='card-details'>
         <h2 className='asset-descrip'><b>Description: </b>{props.description}</h2>
         

         
         {(() => {
        switch (props.type) {
          case 'video':
            return  <Video link={props.link}/>
            break;
          case 'article':
            return <Video link={props.link}/>
          break;
          case 'input-article':
            return <Article/>
            break;
            case 'threadbuilder':
            return <Threadbuilder/>
            break;
          default:
            return null
        }
      })()}




        
         {/* video */}
          {/* <iframe className='asset-content' width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  */}
         
         {/* threadbuilder */}
         {/* <img className='arrow' src="../images/arrow.png" alt="" />
         <h2 className='thread' >ThreadA</h2> */}
       
       {/* Structure and pointer */}
        
      </div>
</div>

  )
}

export default card