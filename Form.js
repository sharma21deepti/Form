import "../Form.css";
import Table from "./Table.js";

export default function Form({onValChange,formInputData,handleSub}) {
    // console.log('props', props);

   const handleSubmit=(e) => {
        e.preventDefault();
             
        // let phone=document.getElementById("phone").value;
        // if(phone.length<10 || phone.length>10)
        // {
        //     alert("Phone no should be of 10 digits");
        //     return false;
        // }
        

        // let pass=document.getElementById("password").value;
       
        // if(pass.length<8 || pass.length>16 )  {

        //     document.getElementById("message").innerHTML="Password should be of 8 to 15 char long";
        //     return false;

        // }
        
        // console.log(pass);
        var regex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
        
       

        //    if(pass.match(regex)) 
        //      {   
        //         return true;
        //      }

        //     else{
        //         document.getElementById("message").innerHTML="Password should contain atleast one Uppercase,lowercase,special char and a digit";
        //         return false;
        //     }
     
           console.log(3);   
        handleSub();
    }

  return (
   <>
    
     <div class="main">
       
       <div class="container">
       <div id="logo">
           <img src="logo1.jpeg" id="logo-img" alt="#"/>
       </div>
       <h3>Sign in with your account</h3>
       
       <form action="" onsubmit={handleSubmit}>
       <div class="name">
           <label>Full Name: </label>
           <br/>
           <input type="text" id="name" name="name" onChange={onValChange} value={formInputData.name} placeholder="Enter your name" required/>
       </div>
       <br/>
       <div class="address"/>
           <label>Address: </label>
           <br/>
           <input type="text" name="address" onChange={onValChange} value={formInputData.address}  placeholder="Enter your Address" id="address"/>
       <div/>
       <br/>
       <div class="gender">
           <label>Gender: </label>
           <br/>
           <label for="male" >Male</label>
           <input type="radio" class="gender" id="male" value="male" name="gender"/>
           
           <label for="female" >Female</label>
           <input type="radio" class="gender" id="female" value="female" name="gender"/>
           
       </div>
       <br/>
       <div class="phone">
           <label>Phone Number: </label>
           <br/>
           <input type="number" name="phoneno" onChange={onValChange} value={formInputData.phoneno} placeholder="Enter your phone no" id="phone" required />
       </div>
       <br />
       <div class="email">
           <label>Email Id: </label>
           <br/>
           <input type="email" name="email" onChange={onValChange} value={formInputData.email} placeholder="Enter your Email Id" required/>
       </div>
       <br/>
       <div>
      
           <label>Password: </label>
           <span id="forgetpass"><a href="#">Forget Password?</a></span>
     
           <br/>
           <input type="text" name="password" onChange={onValChange} value={formInputData.password} id="password" placeholder="Enter your password" required />
           <br/>
           
           <div id = "message" > </div> <br/>
       </div>

       <br/>
       <div class="education">
           <label required>Mark your highest qualifications: </label>
           <br/>
           <br/>
           <div class="ptalign">
           <label for="graduation">Graduation</label>
           <input type="radio" id="graduation" value="graduation" name="education"/>
           </div>
           <br/>
           <div class="ptalign">
           <label for="high-school">High School</label>
           <input type="radio" id="high-school" value="high-school" name="education"/>
           </div>
           <br/>
           <div class="ptalign">
           <label for="post-Graduation">Post-Graduation</label>
           <input type="radio"  id="post-Graduation" value="post-Graduation" name="education"/>
           </div>
           <br/>
           <div class="ptalign">
           <label for="phd">PHD</label>
           <input type="radio" id="phd" value="phd" name="education"/>
           </div>
           <br/>
       </div>
       <br/>
       <input type="submit" onClick={handleSubmit} id="submit" value="Submit"/>
       <p class="policy">Click to view <a href="#">Privacy Policy</a> and <a href="#">Terms of use </a> </p>
       <div class="accountq">
        <hr/>   
       <p>New to family Pro health?</p>
       <hr/>  
       </div>
       <input type="button" value="CREATE YOUR ACCOUNT" id="create_ac"/>
   </form>
       </div>
       </div>
       <footer>
           <a href="#" id="help">Help | Contact Us</a>
           <p>	&#169;2023 Family prohealth Inc. All rights reserved</p>
       </footer>
   </>
  );
}
