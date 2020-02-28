import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import burger from '../assets/images/burger.png';
import code_quiz_game from '../assets/images/code_quiz_game.png';
import daily_sc from '../assets/images/daily_sc.png';
import make_me_laugh from '../assets/images/make_me_laugh.png';
import note_taker from '../assets/images/note_taker.png';
import password_generator from '../assets/images/password_generator.png';
import weather from '../assets/images/weather.png';
// import budget from '../assets/images/budget.png';
import cornermarket from '../assets/images/cornermarket.png';
// import workout from '../assets/images/workout.png';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Password Generator',
                    subTitle: 'JS',
                    src: password_generator,
                    link1: 'https://lilliana1.github.io/password_generator/',
                    link2: 'https://github.com/lilliana1/password_generator',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Code Quiz',
                    subTitle: 'Test your JS skills but, you must do it fast because time is running. Every time you get a wrong answer, you will get penalize by reducing time. Good Luck!',
                    src: code_quiz_game,
                    link1: 'https://lilliana1.github.io/code_quiz/',
                    link2: 'https://github.com/lilliana1/code_quiz',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Work Day Scheduler',
                    subTitle: 'Bootstrap,JS,jQuery',
                    src: daily_sc,
                    link1: 'https://lilliana1.github.io/day_planner/',
                    link2: 'https://github.com/lilliana1/day_planner',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Weather Dashboard',
                    subTitle: 'Bootstrap,JS,jQuery,APIs',
                    src: weather,
                    link1: 'https://lilliana1.github.io/weather_dashboard/',
                    link2: 'https://github.com/lilliana1/weather_dashboard',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Make Me Laugh',
                    subTitle: 'Materialize,JS,jQuery,APIs',
                    src: make_me_laugh,
                    link1: 'https://panamadan.github.io/Project1/',
                    link2: '',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Note Taker',
                    subTitle: 'JS,Node.js,Express',
                    src: note_taker,
                    link1: 'https://murmuring-brook-32507.herokuapp.com/',
                    link2: 'https://github.com/lilliana1/noteTaker',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Burger',
                    subTitle: 'Bootstrap,JS,Node.js,Express,mySQL',
                    src: burger,
                    link1: 'https://guarded-headland-97092.herokuapp.com/',
                    link2:'https://github.com/lilliana1/burger',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Corner Market',
                    subTitle: 'Foundation,JS,Node.js,Express,mySQL,Sequelize',
                    src: cornermarket,
                    link1: 'https://corner-market-app-2020.herokuapp.com/',
                    link2:'https://github.com/lilliana1/groceryTracker',
                    selected: false
                },
                // {
                //     id: 8,
                //     title: 'Workout Tracker',
                //     subTitle: 'Bootstrap,JS,Node.js,Express,MongoDB,Moongoose',
                //     src: workout,
                //     link1: 'https://fitness-tracker-app-2020.herokuapp.com/',
                //     link2:'https://github.com/lilliana1/fitnessTracker',
                //     selected: false
                // },
                // {
                //     id: 9,
                //     title: 'Budget Tracker',
                //     subTitle: 'BOOTSTRAP,JS,NODE.JS,EXPRESS,MONGOOSE',
                //     src: budget,
                //     link1: 'https://budget-tracker-app-2020.herokuapp.com/',
                //     link2: 'https://github.com/lilliana1/budgetTracker',
                //     selected: false
                // },
                {
                    id: 8,
                    title: 'Appetite',
                    subTitle: '',
                    src: '',
                    link1: '',
                    link2:'',
                    selected: false
                },
                
            ]
        }

    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }



    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }
}
export default Carousel;