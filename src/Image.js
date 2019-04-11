import React from 'react'


const tab11=[
    {
      
      image: "https://www.docplanner.com/images/warsaw.png",
      title: ' Warsaw',
      link: "https://www.docplanner.com/career?&loc=spain#jobs-offers",
      
    },
    {
      
        image: "https://www.docplanner.com/images/barcelona.png",
        title: 'Barcelona',
        link: "https://www.docplanner.com/career?&loc=spain#jobs-offers",
        
      },
      {
      
        image: "https://www.docplanner.com/images/istanbul.png",
        title: ' Istanbul',
        link: "https://www.docplanner.com/career?&loc=rome#jobs-offers",
        
      },
      {
      
        image: "https://www.docplanner.com/images/rome.png",
        title: 'Rome',
        link: "https://www.docplanner.com/career?&loc=spain#jobs-offers",
        
      },
      {
      
        image: "https://www.docplanner.com/images/mexico-city.png",
        title: 'Mexico City',
        link: "https://www.docplanner.com/career?&loc=mexico#jobs-offers",
        
      },
      {
      
        image: "https://www.docplanner.com/images/curitiba.png",
        title: ' Curitiba',
        link: "https://www.docplanner.com/career?&loc=brazil#jobs-offers",
        
      },
      
  ]
  



  const Image = (props) => {
    
  return (

     <div className="image"  >
         <a>
         <img src={props.image.image} />
         <div className='title-btn'>
             <h6> {props.image.title} </h6>
             <a href={props.image.link} class="btn btn-primary"style={{fontSize:'11px'}}>SEE OPNINGS</a>
         </div>
         </a>
        
     </div>
)}


const Images = () =>{
   return (
     
 
<div className="All-images"> 

{tab11.map((currentImage, i) =>  
    <Image image={currentImage} />
)}
    
    </div>
    
  )
}





export default  Images