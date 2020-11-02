import React, { Component } from 'react';

class Syllabus extends Component {
    state = {  }

    handleIntro = () => {
        console.log("Clicked syllabus");
    };

    render() { 
        return (
        <div>
            <p>Here is the syllabus.</p>
        </div>);
    }
}
 
export default Syllabus;