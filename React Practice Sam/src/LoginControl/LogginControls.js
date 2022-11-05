import React from 'react'

class LogginControls extends React.Component
{
   
    handlingClick(){
        console.log("Hello");
    }

    render(){
        return(
            <>
            <button onClick={this.handlingClick}> Click Me</button>
            </>
        )
    }
}

// function colorCh(){
//     var preColo = document.getElementsByTagName('button');
//     preColo.style.background-color ==red;

//     if(preColo.style.color =='white'){
//         document.getElementsByTagName(button).style.background-color='red'
//     }

// }
export default LogginControls;