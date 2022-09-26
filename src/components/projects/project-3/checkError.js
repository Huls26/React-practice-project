import { useState, useEffect } from "react";
import "./checkError.css";

export default function User() {
    let [isLoading, setIsLoading] = useState(() => true);
    let [isError, setIsError] = useState(() => false);
    let [user, setUser] = useState(() => []);

    useEffect(() => {
        if (!user.length) {
            fetch("https://api.github.com/uma/xaq")
            .then(responce => responce.status >= 300 ? setIsError(pV => !pV) : responce.json())
            .then(user => {
                setUser(() => user);
                setIsLoading(prevValue => !prevValue);
            })
        }
      
    }, [])

    return (    
        <>  
            {isError ? <h1>Something went Wrong {isError.login}</h1> : isLoading ? <h1>Loading...</h1> : <p>{ user.login }</p>}
            
        </>
    )
}