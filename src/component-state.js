class Car extends React.Component{ 

    constructor (props) {
        super(props);
        this.changColor = this.changColor.bind(this);
        this.state = {
            brand :'Opel',
            model : 'Astra',
            color : 'red',
            year: 2020
        }
    }

    changColor(){
        
        this.setState({
          color : 'blue',
          model :'corsa'

        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.brand} {this.state.model}</h1>
                <p>select color:{this.state.color}</p>
                <button onClick={this.changColor}>Change Color</button>
            </div>

        );
    };
}
ReactDOM.render(<Car />, document.getElementById('root'));