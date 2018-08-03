import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';


class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed imperdiet nunc. Pellentesque porttitor tortor eget suscipit ullamcorper. Maecenas ut pulvinar risus. Mauris mattis nisl tortor, sed hendrerit augue tristique non.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;