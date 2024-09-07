import { useEffect, useState } from "react";
import { generateUserId, getUser, setUser } from "../utils";

const user = getUser();

export function useUser(){
    const [userId, setUserId] = useState(user ?? '');

    useEffect(() => {
        if(userId){
          return;
        }
        const _userId = getUser();
        if(_userId){
          setUserId(_userId);
        } else {
          const _userId = generateUserId();
          setUserId(_userId);
          setUser(_userId)
        }
    }, [userId]);

    return {
        userId
    }
}