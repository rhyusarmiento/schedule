import { FETCH_COURSES } from './types';

function fechCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Up and Running with Redis",
                description: "etc",
            },
            {
                title: "HTML/CSS Bootcamp",
                description: "etc",
            },
            {
                title: "UX for Developers",
                description: "etc",
            },
        ]
    }
}