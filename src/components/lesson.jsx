import React, { Component } from 'react';
import logo from './logo.png';
import Media from 'react-bootstrap/Media'

class Lesson extends Component {
    state = {  
        value: this.props.value,
    }

    // There should be method to handle each lesson information?

    render() { 
        return ( 
            <div>
                <ul className="list-unstyled">
                    <Media as="li">
                        <img
                        width={64}
                        height={64}
                        className="align-self-start mr-3"
                        src={logo}
                        alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Lesson {this.props.id}</h5>
                            <p>
                                There should be a short text about this lesson.
                            </p>
                        </Media.Body>
                    </Media>    
                </ul>

            </div>
            
         );
    }
}
 
export default Lesson;