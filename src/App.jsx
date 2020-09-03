import React from 'react';

class App  extends React.Component {
    name = 'Pili';
    render(){
            return (
                <div className = "App" >
                  {this.name}
                </div>
    );
    }
}

export default App;