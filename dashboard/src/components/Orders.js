import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Orders = () => {
  let [Orders, SetOrders] = useState([]);

  useEffect(() => {
    axios
      // .get("https://full-stack-stock-monitoring-tool.onrender.com/orders")
      .get("http://localhost:3000/orders")
      .then((res) => {
        SetOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({Orders.length})</h3>

      {Orders.length === 0 && (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      )}

      {/* Else Logic -> of Rendering Data */}
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Sell</th>
          </tr>

          {Orders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>
                  <b>{stock.mode}</b>
                </td>
                <td>
                  <Button variant="contained" size="small">Sell</Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
