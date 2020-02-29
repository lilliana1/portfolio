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
import budget from '../assets/images/budget.png';
import cornermarket from '../assets/images/cornermarket.png';
import workout from '../assets/images/workout.png';
import appetite from '../assets/images/appetite.png'
import foodieweb from '../assets/images/foodieweb.png'


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Password Generator',
                    subTitle: 'Create a new personalized strong password. You get to choose if this new password contains numbers,special characters, lower and/or upper case. Not only that but you can choose from 8 to 128 characters. Build with JavaScript.',
                    src: password_generator,
                    link1: 'https://lilliana1.github.io/password_generator/',
                    link2: 'https://github.com/lilliana1/password_generator',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Code Quiz',
                    subTitle: 'Test your JS skills but, you must do it fast because time is running. Every time you get a wrong answer, you will get penalize by reducing time. Build with JavaScript.',
                    src: code_quiz_game,
                    link1: 'https://lilliana1.github.io/code_quiz/',
                    link2: 'https://github.com/lilliana1/code_quiz',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Work Day Scheduler',
                    subTitle: 'Daily Planner keeps you organized from 9:00am to 5:00pm. It gives you real time so you know what time it is! It highlights past,present & future hour. Best thing of this daily planner is that it you accidentally close the tab, you will still see what you gotta do!! Thanks Local Storage for that! Build with Bootstrap, JavaScript and jQuery.',
                    src: daily_sc,
                    link1: 'https://lilliana1.github.io/day_planner/',
                    link2: 'https://github.com/lilliana1/day_planner',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Weather Dashboard',
                    subTitle: 'This simple Weather Dashboard will keep you inform. You just need to type the city and you will get temperature, winds, humidity and even UV! Cool, right? Wait, you also get to see 5 day forecast! Build with Bootstrap, JavaScript, jQuery and Open Weather Map API.',
                    src: weather,
                    link1: 'https://lilliana1.github.io/weather_dashboard/',
                    link2: 'https://github.com/lilliana1/weather_dashboard',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Make Me Laugh',
                    subTitle: 'Make Me Laugh is a "time-waster" website, designed purely for fun. When users want to be entertained, they click the on the "big funny button". Live jokes, funny sounds, and gifs are generated, with random events enlivening the experience. Build with Materialize, JavaScript, jQuery and 3 different APIs. Group project.',
                    src: make_me_laugh,
                    link1: 'https://panamadan.github.io/Project1/',
                    link2: 'https://github.com/panamadan/Project1',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Note Taker',
                    subTitle: 'This application is for users that easily forget something important but at the same time like to keep track of things. You will be able to write, save & delete notes. Build with JavaScript, Node.js, Express.js.',
                    src: note_taker,
                    link1: 'https://murmuring-brook-32507.herokuapp.com/',
                    link2: 'https://github.com/lilliana1/noteTaker',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Burger',
                    subTitle: 'Burger is a restaurant app where users input the names of burgers they will like to eat. Whenever a user submits a burger name, it will be display on the left side of the page waiting to be devour. When the user clicks it, the burger will move to the right side of the page and you have the option to throw them away!. The app will store every in the database, whether is devoured or not. Build with Bootstrap, JavaScript, Node.js, Express.js and mySQL.',
                    src: burger,
                    link1: 'https://guarded-headland-97092.herokuapp.com/',
                    link2:'https://github.com/lilliana1/burger',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Corner Market',
                    subTitle: 'Application built for easily viewing large amounts of products from a grocer in a user friendly way. At its core this app takes a large dataset stored in MYSQL. Users have the ability to create their own user accounts and create shopping carts. Build with Foundation, JavaScript, Node.js, Express.js, mySQL, Sequelize. Group project.',
                    src: cornermarket,
                    link1: 'https://corner-market-app-2020.herokuapp.com/',
                    link2:'https://github.com/lilliana1/groceryTracker',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Workout Tracker',
                    subTitle: 'Bootstrap,JS,Node.js,Express,MongoDB,Moongoose',
                    src: workout,
                    link1: 'https://fitness-tracker-app-2020.herokuapp.com/',
                    link2:'https://github.com/lilliana1/fitnessTracker',
                    selected: false
                },
                {
                    id: 9,
                    title: 'Budget Tracker',
                    subTitle: 'BOOTSTRAP,JS,NODE.JS,EXPRESS,MONGOOSE',
                    src: budget,
                    link1: 'https://budget-tracker-app-2020.herokuapp.com/',
                    link2: 'https://github.com/lilliana1/budgetTracker',
                    selected: false
                },
                {
                    id: 10,
                    title: 'Appetite',
                    subTitle: '',
                    src: appetite,
                    link1: '',
                    link2:'',
                    selected: false
                },
                {
                    id: 11,
                    title: 'Foodie',
                    subTitle: 'Foodie is a simple web app to be use in Puerto Rico. 2 - 1 app that helps you divide your bill into even or separate, not only that but it also has a random food picker. You choose what type of food you would like to eat and it will choose for you! Remember is only meant to be use in Puerto Rico.',
                    src: foodieweb,
                    link1: 'https://lilliana1.github.io/foodie-app/',
                    link2:'https://github.com/lilliana1/foodie-app',
                    selected: false
                }
                
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