import React, { useState ,useEffect } from "react";
import GameTextBox from "../components/TextBox/GameTextBox"
import { Container } from "../components/Grid"
import InventoryGame from "../components/Inventory/inventoryGame"
import CastleWorld from '../features/world/CastleWorld';
import Player from '../features/player';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns"
// import { handleKeyDown, observeImpassable } from "../features/player/movement"


function CastleGame() {

    const { id } = useParams();

    const [userAvatar, setUserAvatar] = useState(null)
    const [userAvatarName, setUserAvatarName] = useState(null)

    useEffect(() => {
        console.log(id)
        API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { sprite } = user.data[0].sprite[0]
       
            // console.log(sprite, name)
                return setUserAvatar(sprite)
        }).then(() => {API.getUserSprite(id).then(user => {
            console.log(user.data[0].sprite[0])
            const { name } = user.data[0].sprite[0]
       
            console.log(name)
            setUserAvatarName(name)
            console.log("userAvatar: ",userAvatar)
        })
        //Atempt to stop the eventlistener from stacking up
        // window.addEventListener("keydown", e =>{handleKeyDown(e)} )
        // //  observeImpassable(undefined, undefined, e)
        
        // return () => {
        //     window.removeEventListener("keydown", e =>{handleKeyDown(e)} )
        // }
        })
    }, []);

    return(
        <div>
                <h1 className="text-center">The Castle</h1>

                <div className="row">
                    <div className="col-md-6">
                        {/* Inventory Bar */}
                        <InventoryGame />
                    </div>
                </div>

                <div>
                    {/* Game Board */}
                    {/* <img src={require("../images/open-book-board.png")} style={styles.bookImg} alt="World Map" /> */}
                        <CastleWorld avatar={userAvatar} avatarName={userAvatarName}/>

                    <div className="col-md-4">
                        <MenuBtns />
                        <br />
                        {/* Dynamically rendered game text appears in text-box */}
                        {/* <GameTextBox avatarName={userAvatarName}/> */}
                    </div>
                </div>
        </div>
    )
}

export default CastleGame;