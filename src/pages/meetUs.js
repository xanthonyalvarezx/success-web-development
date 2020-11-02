import React, { Component } from 'react'
import '../Stylesheets/MeetUs.css'
import Anthony from '../images/Anthony.jpg'
import Ashley from '../images/Ashley.jpg'
import { Container } from 'semantic-ui-react'

class MeetUS extends Component {




    render() {

        return (
            <>
                <header>

                    <h1>Meet the team!</h1>

                </header>
                <main>


                    <ul className='meetUsList'>
                        <li className='meetUsPhoto'>
                            <Container >
                                <img src={Anthony} alt='Company Founder Anthony Alvarez' width='300px' height='300px' />
                                <p>My name is Anthony Alvarez and I am one of the founders of Success Web Development. I graduated from Kenzie Academy in september of 2021 with a Full-stack web developer certificate. I love photography, reading, mountain biking, music, and web development.</p>
                            </Container >
                        </li>

                        <li className='meetUsPhoto'>
                            <Container><img src={Ashley} alt='Placeholder' width='300px' height='300px' /><p>I'm Ashley Storer and I am the project manager/designer here with Success Web Development. My journey began about 18 years ago when I decided to pursue a degree in Multimedia. I recently completed my front-end web developer certification with Kenzie Academy. Photography is my passion, but I also love designing and creating things with a great eye for detail. </p></Container>
                        </li>

                        <li className='meetUsPhoto'>
                            <Container><img src=' https://www.placecage.com/c/200/300' alt='Placeholder' width='300px' height='300px' /><p>Squirty cheese croque monsieur cream cheese. Stinking bishop cheesecake smelly cheese chalk and cheese manchego smelly cheese cream cheese babybel. Queso airedale cheesy feet taleggio pepper jack rubber cheese smelly cheese brie. Lancashire fromage boursin croque monsieur cow cauliflower cheese cheeseburger roquefort. Monterey jack.</p></Container>
                        </li>


                        <li className='meetUsPhoto'>
                            <Container><img src=' https://www.placecage.com/c/200/300' alt='Placeholder' width='300px' height='300px' /><p>Mozzarella monterey jack cheese and wine. When the cheese comes out everybody's happy taleggio emmental cheese triangles cheesecake cheese triangles cow parmesan. Cheesy grin halloumi monterey jack st. agur blue cheese who moved my cheese pecorino emmental stinking bishop. Gouda caerphilly fromage frais cheese strings cottage cheese jarlsberg.</p></Container>
                        </li>


                    </ul>





                </main>
            </>

        )
    }
}

export default MeetUS