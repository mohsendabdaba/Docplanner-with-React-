import React from 'react'

const Box = (props) => {
    // console.log(props.Box.title)
  return (

     <div className="Box1"  style = {{backgroundColor:props.Box.backcolor}}>
         <a>
         <h6> {props.Box.title} </h6>
         <p>{props.Box.paragraph}</p>
         
             {props.Box.country &&
             <select className='button'style={{fontSize:'12px'}}>
             {props.Box.country && props.Box.country.map(el=><option> {el}</option>)}
             </select>}
             <img src={props.Box.image} />
        
         </a>
     </div>
)}

export default  Box