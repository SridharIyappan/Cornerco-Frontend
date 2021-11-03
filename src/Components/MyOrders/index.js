import axios from 'axios';
import { useEffect } from 'react';
import './index.css'

const orders = [
  {
    no: "CO453567S1",
    date: "20-10-2021",
    product: [
      {
        productName: "One",
        qty: 2,
        price: 144.98,
      },
      {
        productName: "Two",
        qty: 1,
        price: 44.98,
      },
    ],
    total: 189.88,
  },
  {
    no: "CO453567C2",
    date: "24-10-2021",
    product: [
      {
        productName: "Five",
        qty: 1,
        price: 54.98,
      },
      {
        productName: "Eight",
        qty: 4,
        price: 244.98,
      },
    ],
    total: 299.88,
  },
];

const MyOrders = () => {
  useEffect(() => {
    getOrders();
  }, []);
  
  const getOrders = async() => {
    try {
      const transactionApi = await axios.get(
        "http://3.144.43.94:3001/api/transaction"
      );
    const transactionData = transactionApi.data;
    transactionData.map(data => {
      console.log(data);
    });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="MyOrders">
      <div className="my-orders">
        <h3>My Orders</h3>
        {orders.map((order) => (
          <div key={order.no} className="my-order">
            <div>
              <h4>Order No: {order.no}</h4>
              <h4>Purchased On: {order.date}</h4>
            </div>
            {order.product.map((prod) => (
              <div>
                <span>{prod.productName}</span>
                <span className="pad">{prod.qty}</span>
                <span className="pad">{prod.price}</span>
              </div>
            ))}
            <div>
              <h4>Total: ${order.total}</h4>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
