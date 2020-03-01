import React from 'react';
import Head from '../components/Head'
import Content from '../components/Content';

function About(props) {
    return (
        <div>
            <Head title={props.title} />
            <Content>
            <p>
            Full Stack Web Developer graduate from the three-month program at the University of Central Florida. Prepared to utilize my skillset in web development areas, including HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB. Acquired a BBA in Computer Information Systems from the University of Puerto Rico. Due to my diligent nature, I am a team player, organized, responsible and easily adapt to different workplace scenarios. Created Foodie which utilized HTML, CSS, Bootstrap, animated.css and JS and won second place best project on a JS Coding Bootcamp in PR. Looking forward to bringing my wealth of experience to support operations.
            </p>

            <p>
            Born and raised in the beautiful Island of Puerto Rico. I currently live in Orlando, FL. I enjoy anything that has to do meeting people from around the world. Besides meeting people, I enjoy Spanish Cinema, traveling, roadtrips, exploring my island and trying new places to eat. 
            </p>

            


            
            
            </Content>
        </div>
        );

}
export default About; 