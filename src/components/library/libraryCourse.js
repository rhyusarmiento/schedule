import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';


class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-icon">
                    <label className="library-course__title">Problem Solveing</label>
                    { Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow"/>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed imperdiet nunc. Pellentesque porttitor tortor eget suscipit ullamcorper. Maecenas ut pulvinar risus. Mauris mattis nisl tortor, sed hendrerit augue tristique non. Praesent non magna lacus. Donec quam nisl, lobortis ut mi quis, ullamcorper sodales eros. Suspendisse dignissim egestas dolor ac scelerisque. Sed enim turpis, interdum eget elementum sit amet, vestibulum quis sem. Maecenas vitae risus.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;