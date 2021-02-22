import React from "react";
import { Header } from "antd/lib/layout/layout";
import "./HeaderView.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const HeaderView = () => {
  return (
    <div>
      <Header className="header">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/add">Add Course</Link>
        </Button>
      </Header>
    </div>
  );
};

export default HeaderView;
