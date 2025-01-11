import './App.css';
import React, { useState } from 'react';
import { Layout, Menu, Select, Card } from 'antd';
import Transactions from './components/Transactions';
import Stats from './components/Stats';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const navItems = [
  {
    key: 1,
    label: (<NavLink to="/">Transactions</NavLink>)
  },
  {
    key: 2,
    label: (<NavLink to="/stats">Stats</NavLink>)
  }
];

const options = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const App = () => {
  let [month, setMonth] = useState(3);

  const handleMonthChange = (value) => {
    setMonth(parseInt(value));
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sider width={200} style={{ backgroundColor: "#2c3e50", paddingTop: "20px" }}>
          <div style={{ color: "white", fontSize: "24px", fontWeight: "bold", textAlign: "center", marginBottom: "40px" }}>
            Dashboard
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={navItems}
            style={{
              borderRight: 0,
            }}
          />
          <Select
            size="large"
            defaultValue={options[month]}
            onChange={handleMonthChange}
            style={{
              width: "80%",
              marginTop: "20px",
              marginLeft: "10%",
            }}
            options={options.map((text, i) => ({
              value: i,
              label: text,
            }))}
          />
        </Sider>

        {/* Main Content */}
        <Layout style={{ paddingLeft: "200px" }}>
          <Header
            style={{
              backgroundColor: "#34495e",
              color: "white",
              padding: "0 20px",
              textAlign: "right",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>Welcome to your Dashboard</div>
          </Header>

          <Content
            style={{
              padding: "24px",
              backgroundColor: "#ecf0f1",
            }}
          >
            <Card
              title={`${options[month]} Overview`}
              bordered={false}
              style={{
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Routes>
                <Route path="/" element={
                  <Transactions month={month} monthText={options[month]} />
                } />
                <Route path="/stats" element={
                  <Stats month={month} monthText={options[month]} />
                } />
              </Routes>
            </Card>
          </Content>

          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#34495e",
              color: "white",
              padding: "10px 20px",
            }}
          >
            <strong>Roxiler Coding Challenge</strong>
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
