import React from 'react';
import marked from 'marked';
import '../App.css';




class MarkDownContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.blankChange = this.blankChange.bind(this);
    }
    
    handleChange(event) {
        
        this.setState({
            input: event.target.value
        });
    }

    blankChange(event) {

    }


    updateInput = function(input){
    this.setState({input});
    }




    render() {
        console.log(this.state.input);
        return (
            <div>
                <div className="editor">
                    <h1></h1>
                    <input value={this.state.input}
                           onChange={this.handleChange}/>
                
                </div>
                <div className="previewer">
                    <h1></h1>
                    <textarea value={this.state.input}
                              onChange={this.blankChange}/>

                </div>
            </div>
        )
    }
}


export default MarkDownContainer;