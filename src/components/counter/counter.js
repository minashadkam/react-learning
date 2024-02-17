import {Component, useState} from "react";

// export const Counter = ()=>{
//     const [count, setCount]=useState(0)
//     return(
//         <div>
//             <p>yo clicked {count} times</p>
//             <button onClick={()=>setCount(count+1)}>click me</button>
//         </div>
//     )
// }


export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'mina',
            count: 0
        }
    }


    render() {
            return(
        <div>
            <p>yo clicked {this.state.count} times</p>
            <button onClick={()=>this.setState({count:this.state.count+1})}>click me</button>
        </div>
    )
    }

}