import React from 'react';


export default function Nav() {
  const navItems = ['Home','About','Github'].map((el,index) => {
    return (
      <li key = {`${el+index}`}>
        {el}
      </li>
    )
  })  

  return(
    <nav className = 'main-nav'>
      <ul>
        {navItems}
       
  
   
      </ul>
    </nav>
  )
}