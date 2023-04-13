import React from "react";
const User = () => {

    return (
        <div>
              <div className="add-to-cart">
            <img src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png" />
            </div>
            <div className="cart-wrapper">
                <div className=" img-wrapper item">
                    <img src="https://cdn1.smartprix.com/rx-iGNlyOFEo-w1200-h1200/GNlyOFEo.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        OnePlus Nord 
                    </span>
                    <br/>
                    <span>
                        Price: $18500.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default User;