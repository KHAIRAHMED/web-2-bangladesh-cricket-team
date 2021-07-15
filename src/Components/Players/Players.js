import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import data from "../../Data/Data.json"
import AllPlayersInfo from '../AllPlayersInfo/AllPlayersInfo';
import Team from '../Team/Team';
import "./Players.css"
const Players = () => {
const [playersData ,setPlayersData] = useState([])
useEffect(()=>{
    setPlayersData(data)
},[])

let [selectedPlayer , setSelectedPlayer] = useState([]);

const handleButton = (props)=>{
    if ((selectedPlayer.indexOf(props) === -1)){
        let newPlayers = [...selectedPlayer , props]
    setSelectedPlayer(newPlayers)
    }
   else{
       alert("already selected")
   }
}
    return (
        <div className="players-container">
            <div className="players-info">
                {
                    playersData.map(player => <AllPlayersInfo style={{display:"flex"}} player ={player} handleButton ={handleButton} key={player.id}></AllPlayersInfo>)
                }
            </div>
            <div className="team">
                <Team selectedPlayer={selectedPlayer}></Team>
            </div>
            
        </div>
    );
};

export default Players;