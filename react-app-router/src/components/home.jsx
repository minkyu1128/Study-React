import {useHistory} from "react-router-dom";


const Home = porps => {
    const history = useHistory();
    return (
        <>
            <h1>home</h1>

            <button onClick={()=>{
                history.push('/profile');
            }}>Go to Profile</button>
        </>
        )

}
export  default Home;