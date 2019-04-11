import React from 'react'

const menuItems = [
    {name: ' About us'  },
    {name: 'Career'},
    {name: 'Departments ', subMenus: [{name: 'Marketing & PR'},      
    {name: 'Customer Success & Sales'}, {name: 'IT, Product, Design & UX'},
    {name: 'Finance & Administration'}, {name: 'HR & more'}]},
   
    
  ]

const Header = () =>{
      return(


<div class="container-fluid">


    <div className="left-menu"> 
          <img class="logo1" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>      
    </div>

      
    <div className="right-menu">

        <ul  className="menu">
           
            {menuItems.map(function(menuItem, i) {
                if (menuItem.subMenus != undefined) {
                    return (
                       <li  className="submenu" key={i}>
                           {menuItem.name}
                            <ul className="sublink" >
                            {menuItem.subMenus.map(function(subMenu, i) {
                                return <li  key={i}  ><a href="#" >{subMenu.name}</a></li>;
                            })}
                            </ul>
                        </li>

                    )
                } else {
                    return (
                        <li class="normal-menu" key={i}>  <a href="#">{menuItem.name}</a>  </li>
                    )
                }
            })}
         </ul>
    </div>

</div>

)
    

}



export default Header