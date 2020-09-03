import React from 'react';
import './App.css';

class App  extends React.Component {
    name = 'Pili';
    render(){
        const styles = {
            border: 'solid',
            textAlign: 'center',
            boxshadow: '2px 2px'
        }
            return (
                <div className = "App" >
                    <div style={styles}>
                        Styles
                    </div>
                    <button>Botón 1</button>
                  {this.name}
                </div>
    );
    }
}

export default App;