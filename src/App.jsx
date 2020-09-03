import React from 'react';
import './App.css';

class App  extends React.Component {
    name = 'Pili';
    render(){
            return (
                <div className = "App" >
                    <button>Botón 1</button>
                  {this.name}
                </div>
    );
    }
}

export default App;