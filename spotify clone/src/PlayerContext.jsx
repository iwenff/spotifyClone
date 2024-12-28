import { createContext } from "react";
import { useRef } from "react";
import { songsData } from "./assets/assets";


const PlayerContext = createContext()
const playerContextProvider = (props) => {
     
    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()
    
    const [track, setTrack] = useState(songsData[0])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export { PlayerContext };
export default playerContextProvider;