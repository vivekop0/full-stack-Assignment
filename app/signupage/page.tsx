
"use client"
import {  useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
const  router = useRouter
export default function page():JSX.Element {
  return (
    <div className=" 
     justify-center  h-screen">
<h1 className="text-center font-extrabold text-2xl mt-3">Sign up</h1>
       
        <div className="flex align-middle justify-center">
        <Form/>
        </div>
    </div>
  )
}






function Form() {
    const router = useRouter();
 
     const [postInputs, setPostInputs] = useState({
       
         username: "",
         password: ""
     });
 
     function sendRequest(){
 
         createUserWithEmailAndPassword(auth,postInputs.username,postInputs.password).then((response)=>{
             alert("user register Successfully")
             router.push("dashboard");
             
         })
 
        
 
     }
   return (
     <div>
     <LabelledInput label="Username" placeholder="sarkarjii534@gmail.com" onChange={(e) => {
                         setPostInputs({
                             ...postInputs,
                             username: e.target.value
                         })
                     }} />
                     <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                         setPostInputs({
                             ...postInputs,
                             password: e.target.value
                         })
                     }} />
                     <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                         sign up
                     </button>
                 </div>
     
   )
 }
 
 
 
 
 
 interface LabelledInputType {
     label: string;
     placeholder: string;
     onChange: (e: ChangeEvent<HTMLInputElement>) => void;
     type?: string;
 }
 
 function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
     return <div>
         <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
         <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
     </div>
 }
