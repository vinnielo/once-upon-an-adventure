import React, { useState, useEffect } from "react";
// import { Container } from "../components/Grid"
import InventoryGame from "../components/Inventory/inventoryGame"
import ForestWorld from '../features/world/ForestWorld';
import ForestWorldThiefMoved from '../features/world/ForestWorldThiefMoved';
// import Player from '../features/player';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MenuBtns from "../components/MenuBtns/MenuBtns"
import { getUserSprite } from "../utils/newApi";

function ForestGame() {

    const { id } = useParams();

    const [userAvatar, setUserAvatar] = useState(null)
    const [userAvatarName, setUserAvatarName] = useState(null)
    const [thiefTalk, setThiefTalk] = useState(null)

    useEffect(() => {
        
        const getData = async () => {
            const reponse = await getUserSprite(id)
            const sprite = await reponse.json()

            console.log(sprite);
            setUserAvatar(sprite[0].sprite[0])
        }

        getData()
    }, []);

    function renderForest() {
        switch (thiefTalk) {
            case true:
                return <ForestWorld avatar={userAvatar} avatarName={userAvatarName} />
            case false:
                return <ForestWorldThiefMoved avatar={userAvatar} avatarName={userAvatarName} />
        }
    }
    return (
        <div>
            <h1 className="text-center">The Forest</h1>

            <div>
                {/* Game Board */}
                {renderForest()}
                
            </div>
            <MenuBtns />
        </div>
    )
}

export default ForestGame;