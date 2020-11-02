import React, { Component } from 'react';
import Lesson from './lesson';


class Lessons extends Component {
    state = { 
        lessons: [
            { id: 1},
            { id: 2},
            { id: 3},
            { id: 4},
        ]
    }

    // There should be a method to handle the lessons list and pass in data to lesson state

    render() { 
        return ( 
            <div>
                {this.state.lessons.map(lesson => (
                <Lesson key = {lesson.id} value={lesson.value} id={lesson.id}>
                    <h4>Lesson #{lesson.id}</h4>
                </Lesson>
            ))}
            
            </div>
         );
    }
}
 
export default Lessons;