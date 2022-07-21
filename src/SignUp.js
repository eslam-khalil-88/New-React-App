import React from 'react'

/************* Component for SignUp form requesting username & Password/Mail, and save
 *               it in userdata array, or fetch it to server
                                ***********************************/

function SignUp(props){
   /********* Empty object created to save name & mail inputs ********************/
   let obj = {};
    /** Handling inputs of name and mail for form inputs */
    const handlename = (event) => {
      obj.name = event.target.value;
      props.ChangeName(event.target.value);
        }
  const handlemail = (event) => {
      obj.mail = event.target.value;
      props.ChangeMail(event.target.value);
  } 

  /** Pushing the user name & mail into userdata array, and continue to UserPage */
    function RegisterUser(){
        console.log(props.MyData);
        //props.Data.push({'name': props.Username , 'mail': props.Usermail});
        props.MyData.push(obj);
        props.ChangeState(4);
    }
    
    return (
        <div id = "LoginForm">
            
            <h3> Please enter a name and email to signup </h3>
                <label>Enter your name </label>
                <p>
                   <input type = "text"  value = {props.Username}
                     onChange = {handlename} 
                       placeholder = {'ex.John Adam'}
                     /></p>
                   
                <label> Enter your mail </label>
                <p>
                   <input type = "email" value = {props.Usermail}
                   onChange = {handlemail} 
                   placeholder = {'JohnAdam@example.com'}
                      /></p>
                <button className = "Btn2" type = "submit" onClick = {()=> RegisterUser()}> Signup </button>
                <p style = {{ textAlign: 'center'}}> <em>Powered by Eslam</em> </p>
           

            </div> 
    );
}
export default SignUp;