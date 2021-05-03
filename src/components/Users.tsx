import React, {useState} from "react";
import randomUser from "../utils/RandomUserAPI";

function Users(props: any) {
    function getUser() {
        randomUser.getRandomUser().then(res => setUserData(res.data.results.map(splitInfo))).catch(err => console.log(err));
        
    };

    function splitInfo(results:any) {
        return (
            <ul>
                <li><img src={results.picture.thumbnail} alt="User Thumbnail"></img></li>
                <li>Name: {results.name.first} {results.name.last}</li>
                <li>Email: {results.email}</li>
            </ul>
        )
    }

    const [userData, setUserData] = useState("");
    
    return (
        <div>
            <div className="userTable">
                {userData}
                {props.filter}
            </div>
            <div className="users">
                <button onClick={getUser}>Log Users</button>
            </div>
        </div>
    )
}

export default Users;