import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Layout, Typography, Button, Dropdown, Menu } from "antd";
import TopHeader from "./components/Header/Header";
import { GlobalOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: "15" }}
              overlay={
                <Menu>
                  <Menu.Item key="chinese">中文</Menu.Item>
                  <Menu.Item key="english">English</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              语言
            </Dropdown.Button>
          </div>

          <Button.Group className={styles["button-group"]}>
            <Button>register</Button>
            <Button>login</Button>
          </Button.Group>
        </div>
        <Header className={styles["main-header"]}>
          <TopHeader />
        </Header>
        <Content>Content</Content>
        <Footer>
          <Typography.Title level={3} style={{textAlign:'center'}}>
            Developed by Taimin 
          </Typography.Title>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
