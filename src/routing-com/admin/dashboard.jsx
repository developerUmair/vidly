import React from "react";

import SideBar from "./sideBar";
import { Route, Routes } from "react-router-dom";
import TableBody from "./../../components/common/TableBody";
import Users from "./users";
import Posts from "../posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
    </div>
  );
};

export default Dashboard;
