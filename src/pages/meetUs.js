import React, { Component } from 'react'
import '../Stylesheets/MeetUs.css'
import Anthony from '../images/Anthony.jpg'
import Ashley from '../images/Ashley.jpg'
import { Container } from 'semantic-ui-react'
import Tyler from "../images/Tyler.jpg"

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
                            <Container><img src={Tyler} alt="team member Tyler" width="300px" height="300px" />
                            <p>My name is Tyler Ammons and I work here at Success Web Development.I graduated from Kenzie Academy in October 2020 with a front-end Web Development certification. I enjoy writing and listening to music, writing fiction, and learning more about Web Development.</p>
                            </Container>
                        </li>


                        <li className='meetUsPhoto'>
                            <Container><img src=' https://www.placecage.com/c/200/300' alt='Placeholder' width='300px' height='300px' /><p>Mozzarella monterey jack cheese and wine. When the cheese comes out everybody's happy taleggio emmental cheese triangles cheesecake cheese triangles cow parmesan. Cheesy grin halloumi monterey jack st. agur blue cheese who moved my cheese pecorino emmental stinking bishop. Gouda caerphilly fromage frais cheese strings cottage cheese jarlsberg.</p></Container>
                        </li>
                        
                        <li className='meetUsPhoto'>
                            <Container><img src=' https://www.placecage.com/c/200/300' alt='Placeholder' width='300px' height='300px'/><p>Mozzarella monterey jack cheese and wine. When the cheese comes out everybody's happy taleggio emmental cheese triangles cheesecake cheese triangles cow parmesan. Cheesy grin halloumi monterey jack st. agur blue cheese who moved my cheese pecorino emmental stinking bishop. Gouda caerphilly fromage frais cheese strings cottage cheese jarlsberg.</p></Container>
                        </li>


                    </ul>





                </main>
            </>

        )
    }
}

export default MeetUS