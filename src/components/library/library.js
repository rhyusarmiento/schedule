import React, { Component } from 'react';
import LibraryCourse from './libraryCourse';

class Libary extends Component {
    render() {
        return (
            <div className="library">
                <h1 className="library__title">Course Libary</h1>
                <LibraryCourse />
                <LibraryCourse />
                <LibraryCourse />
            </div>
        );
    }
}

export default Libary;