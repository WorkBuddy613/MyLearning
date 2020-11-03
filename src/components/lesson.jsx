import React, { Component } from 'react';
import logo from './logo.png';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import LessonPage from './pages/lessonpage';

class Lesson extends Component {
    state = {  
        value: this.props.value,
    }

    // There should be method to handle each lesson information?

    // image source should from the lesson video
    // the stretched-link should be the lesson link

    render() { 
        return ( 
            <div class="media position-relative">
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
                                <h5><a href="#" class="stretched-link">Lesson {this.props.id}</a></h5>
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