import React from 'react'



const tab2=[
  {
    logo: 'https://i.imgur.com/auGQRwU.png',
    title:  'Leader in 10 countries',
    text: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile',
    
  },
  {
      logo: 'https://i.imgur.com/ucciUl6.png',
      title:  '1 million appointments',
      text: 'booked last month',
      
    },
    {
      logo: 'https://i.imgur.com/rqJQz3p.png',
      title:  '30 million unique patients',
      text: 'visit us every month',
      
    },
    {
      logo: 'https://i.imgur.com/HDIL16d.png',
      title:  '2 million active doctors',
      text: 'trust in our solutions',
      
    }
]




  const Card = (props) => {
    return (
       <div className="card">
  
           <a >
           <img src={props.card.logo} />
           <h4>{props.card.title}</h4>
           <p>{props.card.text}</p>
           </a>
           
  
       </div>
  )}

  const Cards = (props) =>{
    return (
      <div className="cards">
      
     {props.cardsList.map((currentCard, i) =>
     
       <Card card={currentCard} />
     )}

     </div>
     
   )
 }



const World = () =>{
      return(


<div class="World">
        
    <div class="left-world">
                    <div class="title">
                        <h3>The world's </h3>
                        <h3> biggest healthcare platform</h3>
                     </div>
                    <p>We work from 6 offices all over the world, bringing Docplanner</p>
                    <p> Group to life in almost 20 countries.</p>
                    <img class="imagelogo" src="https://i.imgur.com/Kz00JDR.png" alt="image1"/>
    </div>   
     <div className="right-world">

     <Cards cardsList={tab2} />


        
     </div>

</div>


)
    

}



export default World