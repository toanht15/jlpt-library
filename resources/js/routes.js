import Home from "../views/components/Home";
import Question from "../views/components/questions/Question";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/question/:id',
        name: 'question',
        component: Question
    }
];
