import {useState , React, useEffect } from 'react';
import NavBar from './NavBar';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import IncorrectLogin from './IncorrectLogin';
import SignUp from './SignUp';
import './App.css';


let userdata = [
  {name: 'Eslam Ibrahim', mail: 'eslam.ebrahimkhalil@gmail.com'},
  {name: 'Ahmed Ibrahim' , mail: 'ahmedibrahim@hotmail.com'},
  {name: 'Akram Ibrahim' , mail: 'akramibrahim.khalil@yahoo.com'}
];


function App() {
  let [Inputstate , Setinput] = useState(0);
  let [Username , Setname] = useState('');
  let [Usermail , Setmail] = useState('');


  

  function MainPageComp(props){
    /* In case no login is made, only show homepage with greeting message */
            /* In case of pressing login button in NavBar, 
           then Setinput(1) and so the next case "LoginPage" is implemented */                        
        if (props.Pagestate === 0){ 
              return <WelcomePage />; 
                          }


   /* In case the user presses on 'Login' button, change WelcomePage by introducing another 
                     component LoginPage  */                     
          else if(props.Pagestate === 1){

            return <LoginPage Data = {userdata} ChangeState = {Setinput} ChangeName = {Setname}
                        ChangeMail = {Setmail} 
                        />;                                                                 
                                           }
          /************* Incorrect Login should give an Erros Message *******************/
         else if(props.Pagestate === 2){
          return <IncorrectLogin Data = {userdata} ChangeState = {Setinput} ChangeName = {Setname}
                           ChangeMail = {Setmail} />;
         }

         /**************** In case of pressing Signup, show a new form to enter information
          *              for new user
         ***********************************************************************/
         else if(props.Pagestate === 3){
          return <SignUp MyData = {userdata} Username = {Username} 
                       Usermail = {Usermail} ChangeName = {Setname}
                       ChangeMail = {Setmail} ChangeState = {Setinput} />;
         }

     /* In case login information are correct, Inputstate = 2 and render the new homepage with 
                     user name and avatar from data[] */
           /* In case of pressing logout button in NavBar, then Setinput(0) and so the first case 
                       of the original WelcomePage is implemented */
              else {
                return  <UserPage username = {Username} ChangeState = {Setinput}/>;     
                         }
}                                    
   
   return (
       <>
       {/* loggingstate used to render either: "Login" or "Username + Avatar + Logout" in 
                              the Navigation bar */}
       <NavBar Username = {Username} Inputstate = {Inputstate} ChangeState = {Setinput}/>  

        <div id = "Main">
           <MainPageComp Pagestate = {Inputstate} />        
        </div>

         <footer style = {{backgroundColor: "rgba(120,120,200,0.5)" }}> 
         All copyright &copy; are reserved for 2022 
           <span id = "FooterPages">
               Visit us at
               <a href = "https://www.facebook.com"><img src ="facebook.png" width = "25px" height = "25px" alt = "Image" /></a>
               <a href = "https://www.twitter.com"><img src ="twitter.png" width = "25px" height = "25px" alt = "Image" /></a>
              </span>
         </footer>
         </>
               );
  
}
export default App;
