import React from "react";
import {
  useCart,
  useDispatchCart,
} from "../Components/ContextReducer";

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  console.log("Cart Data:", data);

  const handleCheckOut = () => {
    alert("Order Placed Successfully!");

    dispatch({
      type: "DROP",
    });
  };

  console.log("Cart Data:", data);

  if (!data || data.length === 0) {
    return (
      <div className="m-5 w-100 text-center fs-3">
        The Cart is Empty
      </div>
    );
  }

  const totalPrice = data.reduce(
    (total, food) => total + Number(food.price || 0),
    0
  );

  return (
    <div className="container m-auto mt-5 table-responsive">
      <table className="table table-hover">
        <thead className="text-success fs-4">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Option</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="text-white">
          {data.map((food, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{food?.name || "N/A"}</td>
              <td>{food?.qty || "N/A"}</td>
              <td>{food?.size || "N/A"}</td>
              <td>₹{food?.price || 0}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE",
                      index: index,
                    })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="fs-3 text-white">Total Price: ₹{totalPrice}</h2>

      <button
        className="btn btn-success mt-3"
        onClick={handleCheckOut}
      >
        Place Order
      </button>
    </div>
  );
}