import React from 'react';
import { Button} from 'react-bootstrap'
import "./Team.css"
const Team = (props) => {
    const {selectedPlayer} = props 
    let total = selectedPlayer.reduce((price ,player)=>(price + player.salery),0)
    return (
        <div className="team-container">
             <div>
                 <h4>Selected Player :- {selectedPlayer.length}</h4>
               {
                selectedPlayer.map(player => <h6>{player.name} :- {player.salery}</h6>)
               }
                <Button className="button" variant="warning">Total-{total}</Button>
            </div>
        </div>
    );
};

export default Team;