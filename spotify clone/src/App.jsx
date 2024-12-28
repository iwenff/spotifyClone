import React, { useContext } from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./PlayerContext";

function App () {

  const { audioRef } = useContext(PlayerContext) || {}

  return (
    <div className = "h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar /> 
        <Display />
      </div>
      <Player/>
      <audio ref={audioRef} preload='auto'></audio>
    </div>
  )
}

export default App