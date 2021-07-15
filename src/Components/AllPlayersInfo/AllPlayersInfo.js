import React from 'react';
import {Image , Button} from 'react-bootstrap'
import "./AllPlayersInfo.css"
const AllPlayersInfo = (props) => {
    const {name , email , img , phone , salery} = props.player
    return (
            <div className="players-info">
            <div className="playerInfo">
            <div>
                <Image className="img-style" src={img} alt="player-image" roundedCircle />
            </div>
                <div className="player-details" >
                    <h6>{name}</h6>
                    <p>{salery}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <Button onClick = {() => (props.handleButton(props.player))} variant="success">Select Player</Button>
                </div>
            </div>
       </div>
    //     <Card style={{ width: '18rem' }}>
        
    //     <Card.Body>
    //       <Card.Title>{name}</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the bulk of
    //         the card's content.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    );
};

export default AllPlayersInfo;