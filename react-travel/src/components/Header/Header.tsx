import React from "react";
import { Layout, Typography, Input,Menu} from "antd";
import styles from "./Header.module.css";
import logo from "../../logo.svg";
const { Header, Footer, Sider, Content } = Layout;
function TopHeader() {
  return (
    <div>
      <img src={logo} alt="" className={styles["App-logo"]} />
      <Typography.Title level={3} className={styles.title}>
        Taimin-ReactTS-Travel
      </Typography.Title>
      <Input.Search
        className={styles["search-input"]}
        placeholder={"Please input the city,theme or key word to search"}
      />
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
      <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key="4"> 自由行 </Menu.Item>
          <Menu.Item key="5"> 私家团 </Menu.Item>
          <Menu.Item key="6"> 邮轮 </Menu.Item>
          <Menu.Item key="7"> 酒店+景点 </Menu.Item>
          <Menu.Item key="8"> 当地玩乐 </Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
          <Menu.Item key="14"> 高端游 </Menu.Item>
          <Menu.Item key="15"> 爱玩户外 </Menu.Item>
          <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu>
    </div>
  );
}

export default TopHeader;
