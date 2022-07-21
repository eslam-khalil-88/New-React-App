import React from 'react';
/*********************************************** Navigation Bar Component ******************************************************************/
function NavBar(props) {
  
    function Navgbar2 (){
      if(props.Inputstate === 4){
        return (
          <div id = "nav-bar">
               <header style = {{textAlign: 'center'}}> React Demo Website </header>
                  <nav >
                   <ul id = "Navbar1">
                      
                      <li> <a href = "#Home">Home </a></li>
                      <li> <a href = "#LeaderBoard">Leaderboard </a></li>
                      <li> <a href = "#About">About</a></li>
                      <li>This is {props.Username}</li>
                     <li>  
                    <button className = "Btn1" type = "submit" onClick = {()=>props.ChangeState(0)}>Log Out</button>
                   </li>   
               </ul>
              </nav>
             <hr/>
            </div>
        );
      }
      else{
        return (
          <div id = "nav-bar">
            <header style = {{textAlign: 'center'}}> React Demo Website </header>
              <nav >
               <ul id = "Navbar1">
                      
                  <li> <a href = "#Home">Home </a></li>
                  <li> <a href = "#LeaderBoard">Leaderboard </a></li>
                  <li> <a href = "#About">About</a></li>
                  <li><button className = "Btn1" type = "submit"
                        onClick = {() => props.ChangeState(3)}>SignUp</button></li>
                  <li> 
                    <button className = "Btn1" type = "submit" onClick = {()=>props.ChangeState(1)}>Log in</button>
                
                   </li>   
               </ul>
              </nav>
             <hr/>
            </div>
        );
      }
    }

     return (
         
            <Navgbar2 />
           
            )
                  }
 export default NavBar;