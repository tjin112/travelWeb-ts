import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext,appSetStateContext } from "../AppState";
import {useAddToCart} from './AddToCart'
// import {withAddToCart} from './AddToCart'
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  // 使用 共享的数据
  const value = useContext(appContext);
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>discounted Items</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{value.username}</p>
      <button onClick={()=>addToCart(id,name)}>add to cart</button>
    </div>
  );
};

export default RobotDiscount;
