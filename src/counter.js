class Counter extends React.Component{
        constructor(props){
                super(props);
                this.addOne = this.addOne.bind(this);
                this.minusOne = this.minusOne.bind(this);
                this.state = {
                        number : 0
                }
        }

        addOne(){
                this.state((prevState)=>{
                        return {
                                number : prevState.number + 1
                        }
                })
        }
        minusOne(){
                this.state((prevState)=>
                {
                        return {
                                number : prevState.number - 1
                        }
                })
        }
        render() { 
                return (
                 <div>
                <h1>Number: {this.state.number}</h1>
                <button onClick={this.addOne}>+1</button>
                 <button onClick={this.minusOne}>-1</button>
                           
                        </div>
                      
                );
        }
}
ReactDOM.render(<Counter/>,document.getElementById('root'));



// var root = document.getElementById('root');
// var number = 0;

// function addOne(){
//         number++;
//         renderApp();
//         console.log('Add one');
// }
// function minusOne(){
//         number--;
//         renderApp();
//         console.log('minus one');
// }


// function renderApp()
// {
//      var template3 = (
//         <div>
//                 <h1>Number: {number}</h1>
//                 <button id="btnplusone" className="btnred" onClick={addOne}>+1</button>
//                 <button id="btninusone" className="btnblue" onClick={minusOne}>-1</button>

//         </div>
// );    

// ReactDOM.render(template3,root);
// }
// function tick()
// {
//    var element = (
//            <div>
//                    <h2>time is:{new Date().toLocaleTimeString()}</h2>
//            </div>
//    );
//    ReactDOM.render(element,root);

// }
// setInterval(tick,1) 
