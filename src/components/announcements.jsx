import React, { Component } from 'react';
import Announcement from './announcement';

class Announcements extends Component {
    state = { 
        announcements: [
            { id: 1, publishTime: "13:30"},
            { id: 2, publishTime: "10:00"},
            { id: 3, publishTime: "20:25"},
            { id: 4, publishTime: "17:40"},
        ]
      }

    // There should be a method to handle the announcements list, probably similar to lessons and lesson

    render() { 
        return ( 
        <div>
             <div>
                {this.state.announcements.map(announcement => (
                <Announcement key = {announcement.id} value={announcement.value} id={announcement.id} publishTime={announcement.publishTime}>
                    <h4>Announcement #{announcement.id}</h4>
                </Announcement>
            ))}
            
            </div>
        </div>
        );
    }
}
 
export default Announcements;