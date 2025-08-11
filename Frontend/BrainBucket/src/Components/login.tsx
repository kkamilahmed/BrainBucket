import { useRef } from "react";
import Brainbucket from "./Brainbucket.png";
import { Button } from "./button";
import { TextBox } from "./text";
import axios from "axios";

export function Login() {
    const userRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)

    async function signUp(){
        const username = userRef.current?.value;
        const password = passRef.current?.value;
        await axios.post("http://localhost:3000/api/signup", {
                username,
                password
        })

    alert("hi");
    console.log("req sent");

    }


  return (
    <div className="bg-[#e3e3e3] rounded-xl w-[1000px] h-[500px] drop-shadow-2xl p-5 flex gap-15">
        <div className="flex flex-col gap-1 justify-center items-end">
            <img  className="w-125" src={Brainbucket} alt="Brainbucket Logo" />
            <div className="font-bold text-6xl text-[#56CBF9]">
                Sign In
            </div>
        </div>
        <div className="flex flex-col gap-5 justify-center my-63">
            <TextBox placeholder="Username" refer={userRef}></TextBox>
            <TextBox placeholder="Password" refer={passRef}></TextBox>
            <div className="flex gap-5">
                <Button bgColor="#56CBF9" hoverColor="#3FB3E1" children="Create Account" onClick={signUp}></Button>
                <Button hoverColor="#3FB3E1" bgColor="#56CBF9" children="Login" onClick={()=>{}} ></Button>
            </div>
  
        </div>

    </div>
  );
}
