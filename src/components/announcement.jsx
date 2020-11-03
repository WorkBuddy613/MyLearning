import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Announcement extends Component {
    state = { 
        value: this.props.value,
     }
    render() { 
        return ( 
            <div>
                <ul className="list-unstyled">
                    <Card border="dark" style={{ width: '40rem' }}>
                        <Card.Body>                       
                        <Card.Title>Announcement {this.props.id}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.publishTime} published</Card.Subtitle>
                        <Card.Text>There should be a short text about this announcement.</Card.Text>
                        </Card.Body>
                    </Card>                   
                
                </ul>
            </div>
         );
    }
}
 
export default Announcement;