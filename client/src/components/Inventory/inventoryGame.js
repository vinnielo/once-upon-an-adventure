import React, {  useState , useEffect } from "react";
import "./InventoryGame.css";
import { Container } from "../Grid";
import API from "../../utils/API"
import { useParams } from "react-router-dom";

function InventoryGame() {
    const { id } = useParams();

    const [userMoney, setUserMoney] = useState(null)
    const [userLives, setUserLives] = useState(null)
    const [userPermit, setUserPermit] = useState(null)
  
    
    useEffect(()=> {
API.getUserSprite(id).then(user => {
    const {money} = user.data[0].sprite[0]

    return setUserMoney(money)
}).then(()=>{
    API.getUserSprite(id).then(user => {
        const {lives} = user.data[0].sprite[0]
    
        return setUserLives(lives)
    })
}

).then(()=>{
    API.getUserSprite(id).then(user => {
        const {permit} = user.data[0].sprite[0]
    
        return setUserPermit(permit)
    })
}

)
    }, [userMoney]);

    return(
        <Container>
            <div className="inventoryBGI special row">
                <div className="col-md-4">
                    {/* Hearts -- hard coded for now but will later be determined by the User's data */}
                    HEALTH: 
                    {userLives}
                        <img src={require("../../images/full-heart.png")} className="heart" alt="Full Heart" />
                        <img src={require("../../images/full-heart.png")} className="heart" alt="Full Heart" />
                        <img src={require("../../images/empty-heart.png")} className="heart" alt="Empty Heart" />

                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data */}
                    INVENTORY:
                    {userPermit}
                        <img src={require("../../images/castle-pass.png")} className="invtImg" alt="Castle Pass" />
                        <img src={require("../../images/health-potion.png")} className="invtImg" alt="Health Potion" />
                </div>

                <div className="col-md-4">
                    {/* Hard coded for now, will later be determined by user data */}
                    COINS:
                        <img src={require("../../images/coins.png")} className="invtImg" alt="Coins" />
                         x {userMoney}
                </div>

            </div>
        </Container>
    )
}

export default InventoryGame;