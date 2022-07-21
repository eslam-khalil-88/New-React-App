import {React , useState , useEffect} from 'react';

/*********************************************** Login Page Component ********************************************************************/
function LoginPage(props) {
    let [username , NewName] = useState('');
    let [usermail , NewMail] = useState('');
    
    function handlename (event)  {
        
        NewName(event.target.value);
        //props.ChangeName(event.target.value);
        console.log(username);
          
    }
    function handlemail (event)  {
        NewMail(event.target.value);
        //props.ChangeMail(event.target.value);
        console.log(usermail);
        
    }                                                                                  
    
    function CheckUser(){
                  

          /* Compare the input name and mail to the correct data, if data is correct 
                         'true' SetInput (1) to enter <UserPage /> */
           for(let indx = 0; indx < props.Data.length; indx++){
               if(props.Data[indx].name === username && props.Data[indx].mail === usermail){
                            
                            props.ChangeState(4);
                            props.ChangeName(username);
                            props.ChangeMail(usermail);
                            break;
               }
               else if(props.Data[indx].name !== username && props.Data[indx].mail !== usermail && indx === props.Data.length-1){
                      
                      props.ChangeState(2);
               }
               else{
                             continue;
               }
                   //props.ChangeState(2);
                   //return;
           }
                }
        
              /*************** Main Rendering code ***************** */
     return (  
        <div id = "LoginForm">
            
            <h3> LOG IN information, please enter Name & Email </h3>
                <label>Enter your name </label>
                <p>
                   <input type = "text"  value = {username}
                     onChange = {handlename} 
                       placeholder = {'ex.John Adam'}
                     /></p>
                   
                <label> Enter your mail </label>
                <p>
                   <input type = "email" value = {usermail}
                   onChange = {handlemail} 
                   placeholder = {'JohnAdam@example.com'}
                      /></p>
                <button className = "Btn2" type = "submit" onClick = {()=> CheckUser()}> Login </button>
                <p style = {{ textAlign: 'center'}}> <em>Powered by Eslam</em> </p>
           

            </div>                 
          
            )
                  }

 export default LoginPage;