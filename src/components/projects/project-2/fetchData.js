import { useState, useEffect } from "react";
import "./fetchData.css";

export default function Users() {
    let [githubUsers, setUser] = useState(() => []);

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then(users => users.json())
        .then(users => setUser(() => users))
    }, [])

    let userElement = githubUsers.map(user => (<User 
                                    img={user.avatar_url}
                                    name={user.login}
                                />)
    )

    return (
        <section className="github-user">
            <h1 className="github-title">Githhub Users</h1>

            <div className="github-container">
                {userElement}
            </div>
        </section>
    )
}

function User({img, name}) {
    return (
        <div className="user-container">
            <div className="profile--container">
                <img src={img} alt="profile" className="user--profile"/>
            </div>
           
            <div className="user--text">
                <h5 className="user--name">
                    {name}
                </h5>

                <p className="profile">profile</p>
            </div>
        </div>
    )
}