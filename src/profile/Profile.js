import React from 'react'
import ph from './imgres.jpg'
import propTypes from "prop-types";

const Profile = (props) => {
    
    return (
        <div style={{marginTop:"3%", display:"flex", flexDirection:"column", 
        width:"700px", marginLeft:"auto", marginRight:"auto"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <p><span style={{color:"#BC8F8F", textDecoration:"underline", fontSize:"20px"}}>
                    FullName:</span> {props.fullName}</p>
                <p><span style={{color:"#BC8F8F", textDecoration:"underline", fontSize:"20px"}}>
                    Bio:</span> {props.bio}</p>
                <p><span style={{color:"#BC8F8F", textDecoration:"underline", fontSize:"20px"}}>
                    Profession:</span> {props.profession}</p>
            </div>
            <button onClick={()=>props.alertFct(props.fullName)} 
            style={{border:"none", backgroundColor:"none", marginLeft:"auto",
             marginRight:"auto", padding:"15px", width:"200px", borderRadius:"50px", 
             boxShadow: "inset 0 0 8px 8px #BC8F8F", marginBottom:"2%", marginTop:"2%"}}>
                Click me!</button>
            <div>{props.children}</div>
        </div>
    )
}

Profile.defaultProps ={
    fullName:"Kevin Pietersen",
    bio:"Something different, something better",
    profession:"Librarian",
    children:<img src={ph} alt="default_img"/>
}

Profile.propTypes={
    fullName: propTypes.string,
    bio : propTypes.string,
    profession: propTypes.string,
    alertFct: propTypes.func
}

export default Profile
