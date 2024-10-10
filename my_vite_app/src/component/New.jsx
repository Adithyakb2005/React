import{ Component } from "react";



class New1_class extends Component{
    constructor(){
        super()
        this.state={color:'blue',width:'200px'}
    }
    render(){
        return(
            <h2>hello world{this.state.color}{this.state.width}</h2>
        )
    }
}
export default New1_class


   