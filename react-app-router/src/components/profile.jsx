import {useHistory} from "react-router-dom";

const Profile = porps => {
    const history = useHistory();

    return (
        <>
            <h1>Profile</h1>

            <button onClick={()=>{
                history.push('/');
            }}>Go to Home</button>
        </>
    );
}
export  default Profile;