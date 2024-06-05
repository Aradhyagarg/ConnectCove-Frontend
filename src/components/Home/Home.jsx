import React from 'react'
import Post from '../Post/Post'
import User from '../User/User'
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="homeleft">
                    <Post postImage="https://www.w3schools.com/w3css/img_snowtops.jpg" ownerName={"Aradhya"} caption={"This is the sample photo"}/>
                </div>
                    <div className="homeright">
                        <User
                        userId = {"user._id"}
                        name = {"user.name"}
                        avatar = {"user.avatar.url"}
                        />
                    </div>
                
            </div>
        </div>
    )
}

export default Home