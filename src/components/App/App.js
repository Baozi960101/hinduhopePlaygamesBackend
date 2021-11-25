import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../../global/context";
import { ScrollToTop } from "../../global/Scroll";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import HomeArticle from "../../pages/edit/HomeArticle";
import Mobile from "../../pages/edit/Mobile";
import Esports from "../../pages/edit/Esports";
import Rmg from "../../pages/edit/Rmg";
import Card from "../../pages/edit/Card";
import Raiders from "../../pages/edit/Raiders";
import Car from "../../pages/edit/Car";
import Cricket from "../../pages/edit/Cricket";
import Tennis from "../../pages/edit/Tennis";
import Badminton from "../../pages/edit/Badminton/Badminton";
import Search from "../../pages/Search";
import SiderBar from "../Sidebar";
import styled from "styled-components";

const MainArea = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-left: 300px;
  padding-top: 25px;
`;

export default function App() {
  const [user, setUser] = useState(true);
  // 登入狀態   之後改為false

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          <ScrollToTop />
          {user && <SiderBar />}
          <Switch>
            <Route exact path="/">
              <MainArea>
                <Home />
              </MainArea>
            </Route>
            <Route exact path="/login">
              <Login />
              {/* 針對Login頁做出側邊欄的判斷   目前是以帳號登入為準 */}
            </Route>
            <Route exact path="/edithome">
              <MainArea>
                <HomeArticle />
              </MainArea>
            </Route>
            <Route exact path="/editrmg">
              <MainArea>
                <Rmg />
              </MainArea>
            </Route>
            <Route exact path="/editmobile">
              <MainArea>
                <Mobile />
              </MainArea>
            </Route>
            <Route exact path="/editesports">
              <MainArea>
                <Esports />
              </MainArea>
            </Route>
            <Route exact path="/editcard">
              <MainArea>
                <Card />
              </MainArea>
            </Route>
            <Route exact path="/editraiders">
              <MainArea>
                <Raiders />
              </MainArea>
            </Route>
            <Route exact path="/editcar">
              <MainArea>
                <Car />
              </MainArea>
            </Route>
            <Route exact path="/editcricket">
              <MainArea>
                <Cricket />
              </MainArea>
            </Route>
            <Route exact path="/edittennis">
              <MainArea>
                <Tennis />
              </MainArea>
            </Route>
            <Route exact path="/editbadminton">
              <MainArea>
                <Badminton />
              </MainArea>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </>
  );
}
