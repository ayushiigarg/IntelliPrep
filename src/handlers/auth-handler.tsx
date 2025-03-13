import {LoaderPage} from "@/routes/loader-page";
import { useAuth, useUser } from "@clerk/clerk-react"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { db } from "@/config/firebase.config";
import { User } from "@/types";

const AuthHandler = () => {

  const {isSignedIn} = useAuth();
  const {user} = useUser();
  // const pathname = useLoaderData().pathname;
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false );
  useEffect(()=>{
    const storeUserData = async()=>{
           if(isSignedIn && user){
        setLoading(true)
        try {
          const userSnap = await getDoc(doc(db, "users", user.id));
            if(!userSnap.exists()){
              const userData : User = {
                id: user.id,
                name: user.fullName || user.firstName || "Anonymous",
                email: user.primaryEmailAddress?.emailAddress || "",
                imageUrl: user.imageUrl,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
              }
              await setDoc(doc(db, "users", user.id),userData);
            }
        } catch (error) {
            console.log("Error on storing the user data : ",error);
        }finally{
          setLoading(false)
        }
     }
    }
    storeUserData()
  },[isSignedIn,user])
  if(loading){
    return <LoaderPage/>
  }
  return null
}

export default AuthHandler
