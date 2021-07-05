import React, { Component } from 'react';
import {Card , Button , CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class PokemonCard extends Component {
    render() {
        return (
            <CardGroup>

            {this.props.allData.map((item,idx)=>{
                return(
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                            {item.url}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>this.props.addToFav(item)}>Add To Favorite</Button>
                        </Card.Body>
                        </Card> 
                    </div>
                )
            })}
             </CardGroup>
        );
    }
}

export default PokemonCard;


