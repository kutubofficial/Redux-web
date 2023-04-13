import User from "../Components/User";
import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/Action";

const mapStateToProps = (state)=>{
   
}
const mapDispatchToProps = (dispatch)=>{
    addToCartHandler:data=>(addToCart(data))
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
