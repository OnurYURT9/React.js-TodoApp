const root = document.getElementById('root');

const app = {
        
    title: "Todo Application",
    description: "Lorem, ipsum dolor.",
    items: ['item 1','item 2','item3']
};


const onFormSubmit = () => {
    event.preventDefault();

    let item = event.target.elements.txtItem.value;

    if(item) {
        app.items.push(item);
        event.target.elements.txtItem.value='';
        render();
    }

    console.log('form submitted');
}

const clearItems = () =>{
       app.items = [];
    render();
}

const render = () => {
    let template =  (
        <div>
            <h1>{app.title}</h1>
            <div>{app.description}.</div>
            {
                
               <ul>
                   {
                       app.items.map((item,index) => {
                         return <li key={index}>{item}</li>
                       })
                   }
                </ul>
            }
            <p>
                <button onClick={clearItems}>Clear Items</button>
            </p>
            <p>{app.items.length}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem"/>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}

function render() {
   

ReactDOM.render(template, root);
}

render();

       
//       var template =    <div>
//        <h1 id="header">Hello</h1><div>Lorem ipsum dolor sit amet.</div>
//                 <ul>
//                         <li>lorem ipsum</li>
//                         <li>lorem ipsum</li>
//                         <li>lorem ipsum</li>

//                 </ul>
//         </div>;

//         var number = 0;

//         function addOne(){
//                 number++;
//                 renderApp();
//                 console.log('Add one');
//         }
//         function minusOne(){
//                 number--;
//                 renderApp();
//                 console.log('minus one');
//         }
       

//         function renderApp()
//         {
//              var template3 = (
//                 <div>
//                         <h1>Number: {number}</h1>
//                         <button id="btnplusone" className="btnred" onClick={addOne}>+1</button>
//                         <button id="btninusone" className="btnblue" onClick={minusOne}>-1</button>

//                 </div>
//         );    
        
//         ReactDOM.render(template3,root);
// }
//         function tick()
//         {
//            var element = (
//                    <div>
//                            <h2>time is:{new Date().toLocaleTimeString()}</h2>
//                    </div>
//            );
//            ReactDOM.render(element,root);

//         }
//         setInterval(tick,1)     //saniyede 1 güncelleniyor
        

        //        renderApp();

     /*
        var product = {
       name : "Huawei Mate 20 Lite",
         price : 6300,
         description : 'İyi bir telefon',
         types : []
        }*/
/*
        function formatPrice(p){
                return p.price + 'TL';
        }*/
        /*
        function getDescription(description){
                if(description){
                       return <p id="product-desc">description:{description}</p>;     
                } 
        }

        var template2 = (<div id="product-details">
                <h2 id="product-name">name:{product.name ? product.name:'no name'}</h2>
                <p id="product-price">price:{product.price==0?'free':product.price}</p>
                {(product.name && product.price>0) && <p>{product.price} TL</p>}
                {getDescription(product.description)}
                <p>{product.types.length>0?'there are options':'no options'}</p>
        </div>);
        // var template = React.createElement(
        //   'h1',
        //   null,
        //     'hello onurr'
        // )*/




   