import { useState} from "react"
import "../style/Login.css"
import data from '../Assets/data/User.json'
import treeImg from "../Assets/images/tree.png"
import { Link,useNavigate } from "react-router-dom";

export default function Login(props){

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    props.setShowHead(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const userData=data.filter((user)=>
                user.username === userName
        )
        const Password=data.find((user)=>
        user.password === password
        )
        if(userData == ''){
            alert("Please enter a valid User Name")
        }
        else if(userData[0].password !== password){
            alert("Please enter a valid Password");
            setIsSubmitted(false);
        }
        else{
            setIsSubmitted(true);
            navigate('poll')
        }


    }
    return (
        <div className="">
            <div className="login-card">
                <p className="login-main-text">LOGIN</p> 
                <div className="tree-img"><img src={treeImg} alt="" /></div>
                <input type="text" placeholder="Enter User Name" name="username" required value={userName} onChange={e=>setUserName(e.target.value)}/>
                <input type="password" placeholder="Enter Password" value={password} name="pass" onChange={e=>setPassword(e.target.value)} required />
                <Link to="poll">
                    <button className="login-button" onClick={handleSubmit}>Log In</button>
                </Link>
            </div>
        </div>
    )
}