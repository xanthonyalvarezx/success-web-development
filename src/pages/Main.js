import React, {Component} from 'react'
import Hero from '../images/Hero.png'
import Logo from '../images/Logo.png'
import { Button, Icon } from 'semantic-ui-react'
import '../Stylesheets/main.css'

class Main extends Component{










render(){
return(

    <div>
        <header>
            <img id='hero' src={Hero} alt='>>> print("HELLO WORLD")'/>

        </header>
        <main>
            <div >
                <img id='logo' src={Logo} alt='Success Web Development logo'/>
            </div>
            
            

        </main>
      
        
    
    </div>







)


    }
}

export default Main