import React, { Component } from 'react';
import Announcements from '../announcements';
import CourseIntro from '../courseintro';
import Lessons from '../lessons';
import Syllabus from '../syllabus';

class MyLearning extends Component {
    state = { 
        whichComponentToShow: "CourseIntro",
     };


    // The following handlers are used to change the state of whichComponentToShow
    handleIntro = () => {
        console.log("Clicked course intro");
        this.setState({ whichComponentToShow: "CourseIntro"});
    };

    handleSyllabus = () => {
        console.log("Clicked syllabus");
        this.setState({ whichComponentToShow: "Syllabus"});
    };

    handleAnnouncements = () => {
        console.log("Clicked anncouncements");
        this.setState({ whichComponentToShow: "Announcements"});
    };

    handleLessons = () => {
        console.log("Clicked lessons");
        this.setState({ whichComponentToShow: "Lessons"});
    };

    // This is the navbar of the mylearning page, which includes "Course Intro", "Syllabus", "Announcements", and "Lessons"
    navbar = 
        <nav className="navbar navbar-light">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#"><button onClick={ this.handleIntro } 
                    className="btn btn-secondary btn-sm">Course Intro</button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><button onClick={this.handleSyllabus} 
                    className="btn btn-secondary btn-sm">Syllabus</button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><button onClick={this.handleAnnouncements}
                    className="btn btn-secondary btn-sm">Announcements</button></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><button onClick={this.handleLessons}
                    className="btn btn-secondary btn-sm">Lessons</button></a>
                </li>
            </ul>
        </nav>;
        
        
    

    render() { 
        if (this.state.whichComponentToShow === "CourseIntro") {
            return (
                <div class="container">
                    {this.navbar}
                    <CourseIntro></CourseIntro>
                </div>
            );
        } else if (this.state.whichComponentToShow === "Syllabus") {
            return (
                <div class="container">
                    {this.navbar}
                    <Syllabus></Syllabus>
                </div>
            );
        } else if (this.state.whichComponentToShow === "Announcements") {
            return (
                <div class="container">
                    {this.navbar}
                    <Announcements></Announcements>
                </div>
            );
        } else if (this.state.whichComponentToShow === "Lessons") {
            return (
                <div class="container">
                    {this.navbar}
                    <Lessons></Lessons>
                </div>
            );
        }
        return null;
    }
}
 
export default MyLearning;