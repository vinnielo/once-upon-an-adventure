import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./MusicBtns.css"
import API from "../../utils/API";
import { gameMusic, gameMusic2, gameMusic3 } from "../../features/sound/index"


function MusicBtn(props) {
    const [musicPlace, setMusicPlace] = useState(null)
    const [music, setMusic] = useState(null)
    const { id } = useParams();
    let currentMusic= gameMusic;

    useEffect(() => {
        API.getUserSprite(id).then(user => {
            if (!user.data[0].sprite[0]){
                setMusicPlace("forest")
            }else{
                const { place } = user.data[0].sprite[0].place
                setMusicPlace(place)
            }
        })
    }, [])
    
    switch (musicPlace) {
        case "forest":
            currentMusic = gameMusic
            break;
        case "castle":
            currentMusic = gameMusic2
            break;
        case "cliff":
            currentMusic = gameMusic3
            break;
        case "home":
            currentMusic= gameMusic2
    }

    switch (music) {
        case true:
            currentMusic.stop()
            currentMusic.play()
            return (<div id="musicBtn" onClick={() => {
                setMusic(false)
            }}
            >Music <i className="fas fa-volume-up"></i>
            </div>)
        case false:
            currentMusic.stop()
            return (<div id="musicBtn" onClick={() => {
                setMusic(true)
            }}
            >Music <i className="fas fa-volume-mute"></i></div>)
        default:
            return (<div id="musicBtn" onClick={() => {
                setMusic(true)
            }}
            >Music <i className="fas fa-volume-mute"></i></div>)
    }
}
export default MusicBtn;