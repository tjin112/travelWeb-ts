import React from "react";
// import logo from './logo.svg';
import styles from "./App.module.css";
import robots from "../src/mockdata/robots.json";
import Robots from "./components/robots";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}

class App extends React.Component<Props, State> {
  // 生命周期第一阶段  数据初始化
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }
  // 组件创建好dom元素之后，挂载进页面的时候调用
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robotGallery: data }));
  }
  // 第二阶段
  //  getDerviedStateFromProps(nextProps,nextState) 对比当前的props和state与之前的变化
  // shouldComponentUpdate(nextProps,nextProps){} 返回值为true false，true 则跟新dom
  // componentDidUpdate(){}  组件跟新之后 就被调用

  // 第三阶段：销毁
  // componentWillUnmount(){}
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <h1>I just want to make web title as long as I can!</h1>
        </div>
        <button
          onClick={() => {
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log(this.state.count);
              }
            );
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log(this.state.count);
              }
            );
          }}
        >
          click
        </button>
        <span>{this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robots id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
