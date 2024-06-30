import React, { useState } from "react";
import * as Containers from '../containers';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../style.css"
import LoginHeader from "./Header/LoginHader";
import Footer from "./Footer/Footer";
import Swal from 'sweetalert2';


function Login() {
    const [signIn, toggle] = React.useState(true);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5001/api/users/register", {
                userName,
                email,
                password
            });
            console.log(response.data); // Handle the response here
            Swal.fire({
                title: "Sign Up successfully!",
                text: "You clicked the button!",
                icon: "success"
              })
        } catch (error) {
            if (error.response) {
                console.error('Error signing up:', error.response.data.error);
            } else {
                console.error('Error signing up:', error.message); 
            }
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5001/api/users/login", {
                userName,
                password
            });
            console.log(response.data.accessToken); //Handle the access token here
            navigate('/Home');
        } catch (error) {
            if (error.response) {
                console.error('Error signing in:', error.response.data);
            } else {
                console.error('Error signing in:', error.message); // Handle network errors
            }
        }
    };


     return(
        <>
        <div className="m-header">
        <LoginHeader />
        </div>
        <div className="l-container">
         <Containers.Container >
             <Containers.SignUpContainer signinIn={signIn}>
                 <Containers.Form onSubmit={handleSignUp}>
                    <Containers.Title>Create Account</Containers.Title>
                    <Containers.Input type='text' placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <Containers.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Containers.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Containers.Button type="submit">Sign Up</Containers.Button>
                 </Containers.Form>
             </Containers.SignUpContainer>

             <Containers.SignInContainer signinIn={signIn}>
                  <Containers.Form onSubmit={handleSignIn}>
                    <Containers.Title>Sign in</Containers.Title>
                    <Containers.Input type='text' placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <Containers.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Containers.Anchor href='#'>Forgot your password?</Containers.Anchor>
                    <Containers.Button type="submit">Sign In</Containers.Button>
                  </Containers.Form>
             </Containers.SignInContainer>

             <Containers.OverlayContainer signinIn={signIn}>
                 <Containers.Overlay signinIn={signIn}>

                 <Containers.LeftOverlayPanel signinIn={signIn}>
                     <Containers.Title>Welcome Back!</Containers.Title>
                     <Containers.Paragraph>
                         To keep connected with us please login with your personal info
                     </Containers.Paragraph>
                     <Containers.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Containers.GhostButton>
                     </Containers.LeftOverlayPanel>

                     <Containers.RightOverlayPanel signinIn={signIn}>
                       <Containers.Title>Hello, Friend!</Containers.Title>
                       <Containers.Paragraph>
                           Enter Your personal details and start journey with us
                       </Containers.Paragraph>
                           <Containers.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Containers.GhostButton> 
                     </Containers.RightOverlayPanel>
 
                 </Containers.Overlay>
             </Containers.OverlayContainer>

         </Containers.Container>
         </div>
         <div className="m-Footer">
            <Footer/>
        </div>
         </>
     )
}

export default Login;