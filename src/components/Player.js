import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Player = ({name,team,nationality,jerseyNumber,age,image}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {team}
        </Card.Text>
        <Card.Text>
          {nationality}
        </Card.Text>
        <Card.Text>
          {jerseyNumber}
        </Card.Text>
        <Card.Text>
          {age}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Player
