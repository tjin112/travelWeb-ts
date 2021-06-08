import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import styles from "./App.module.css";
import robots from "../src/mockdata/robots.json";
import Robots from "./components/robots";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";
import RobotsDiscount from "./components/RobotDiscount";

interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}

const App: React.FC<Props> = (props) => {
  const [count, setcount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String>();
  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotGallery(data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <h1>I just want to make web title as long as I can!</h1>
      </div>
      <button
        onClick={() => {
          setcount(count + 1);
          console.log(count);
          setcount(count + 1);
          console.log(count);
        }}
      >
        click
      </button>
      <span>{count}</span>
      <ShoppingCart />
      {!error || (error !== "" && <div>Error: {error}</div>)}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, index) =>
            index % 2 == 0 ? (
              <RobotsDiscount id={r.id} email={r.email} name={r.name} key={r.id} />
            ) : (
              <Robots id={r.id} email={r.email} name={r.name} key={r.id} />
            )
          )}
        </div>
      ) : (
        <span>loading ....</span>
      )}
    </div>
  );
};

export default App;
