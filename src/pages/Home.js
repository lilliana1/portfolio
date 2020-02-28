import React from 'react';
import Head from '../components/Head'
import Carousel from '../components/Carousel'

function Home(props) {
    return (
        <div>
            <Head title={props.title} subTitle={props.subTitle} />
            <Carousel />
        </div>
        
    );

}
export default Home; 