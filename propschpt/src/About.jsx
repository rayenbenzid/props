import React from 'react'
import NewOne from "./NewOne";

const About = () => {
    let products=[
        {
            image:"https://icdn.caughtoffside.com/wp-content/uploads/2018/02/ronaldo-man-utd-trophy-414x372.jpg",
            name:"Ronaldo",
            nationality:"Portugal",
            age:"39"
            
        },
        {
            image:"https://tse2.mm.bing.net/th?id=OIP.uNu5Eqd0I_-LPGDVResL3QHaHa&pid=Api&P=0&h=180",
            name:"Messi",
            nationality:"Argentin",
            age:"36"

        },
        {
            image:"https://tse1.mm.bing.net/th?id=OIP.jeAhp9diD_7lYlCBoAZS0wHaGh&pid=Api&P=0&h=180",
            name:"Zidane",
            nationality:"Franc",
            age:"51"
        },
    ]
  return (
    <div className='about'>
        <h1>players</h1>
        {products.map(el=><NewOne el={el} />)}
      
    </div>
  )
}

export default About
