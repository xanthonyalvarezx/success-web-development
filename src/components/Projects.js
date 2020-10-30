import React, { Component } from 'react'
import { List as li } from 'semantic-ui-react'
import '../Stylesheets/PreviousProjects.css'


class projects extends Component {
    constructor(props) {
        super(props)


    }






    render() {


        return (
            <>
                <header className='projectsHeader'>
                    <h1>Take a look at some projects the team has previously completed for other clients!</h1>
                </header>
                <main>
                    <div id='projectListDiv'>


                        <ul id='projectList'>
                            <li>
                                Project
                        </li>

                            <li>
                                Project
                        </li>

                            <li>
                                Project
                        </li>

                            <li>
                                Project
                        </li>
                        </ul>

                    </div>
                </main>
            </>


        )
    }
}
export default projects