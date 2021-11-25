import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../../global/context";
import { ScrollToTop } from "../../global/Scroll";
import Login from "../../pages/Login";
import Article from "../../pages/Article";
import Edit from "../../pages/Edit";
import Home from "../../pages/Home";
import Rmg from "../../pages/Rmg";
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
            <Route exact path="/article">
              <MainArea>
                <Article />
              </MainArea>
            </Route>
            <Route exact path="/edit">
              <MainArea>
                <Edit />
              </MainArea>
            </Route>
            <Route exact path="/editrmg">
              <MainArea>
                <Rmg />
              </MainArea>
            </Route>
            <Route exact path="/search">
              <MainArea>
                <Search />
              </MainArea>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </>
  );
}
