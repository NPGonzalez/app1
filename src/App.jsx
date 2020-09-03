import React from 'react';
import './App.css';
// import * as styles from './styles';

class App  extends React.Component {
    name = 'Pili';
    render(){
        // const styles = {
        //     border: 'solid',
        //     textAlign: 'center',
        //     boxshadow: '2px 2px'
        // }
            return (
                <div className = "App" >
                    {/* <div style={styles.styles}>
                        Styles
                    </div>
                    <button>Botón 1</button>
                  {this.name}
                 { console.log(<div />)} */}


                 {React.createElement (
                     'div',
                     {className:'App'},
                     'React'
                 )}
                </div>
    );
    }
}

export default App;