import React, { useState, useEffect } from "react";
import TextBox from "../components/TextBox/TextBox"
import { Container } from "../components/Grid"
import Inventory from "../components/Inventory/Inventory"
import GameTextModal from "../components/Modals/GameTextModal";
// import World from '../features/world/index';
import Cliffs from "../components/MapLocations/Cliffs";
import Forest from "../components/MapLocations/Forest";
import Village from "../components/MapLocations/Village";
import Castle from "../components/MapLocations/Castle";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import MusicBtn from "../components/SoundBtns/MusicBtn";

const styles = {
    bookImg: {
        marginTop: 30,
        width: "100%",
    }
}

function Continue() {

    const { id } = useParams();

    const [userAvatar, setUserAvatar] = useState(null)
    const [userAvatarName, setUserAvatarName] = useState(null)
    const [userAvatarMoney, setUserAvatarMoney] = useState(null)

    useEffect(() => {
        API.getUserSprite(id).then(user => {
            console.log(user);
            const { sprite } = user.data[0].sprite[0]

            return setUserAvatar(sprite)
        }).then(() => {

            API.getUserSprite(id).then(user => {
                const { name } = user.data[0].sprite[0]

                setUserAvatarName(name)
            })
        })
    }, []);

    return (
        <div>
            <MusicBtn />
            <h1 className="text-center">World Map</h1>

            

            <div>
                {/* Game Board */}
                <img src={require("../images/open-book-board.png")} style={styles.bookImg} alt="World Map" />
                <Cliffs />
                <Forest />
                <Village />
                <Castle />
                <div>
                    {/* Dynamically rendered game text appears in text-box */}
                    <TextBox avatarName={userAvatarName} />
                </div>
            </div>
        </div>
    )
}

export default Continue;