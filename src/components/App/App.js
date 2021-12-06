import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import { AuthContext, SlugContext } from "../../global/context";
import { scrollToTop } from "../../global/scroll";
import Login from "../../pages/Login";
import Home from "../../pages/playGamesAi/Home";
import HomeArticle from "../../pages/playGamesAi/edit/HomeArticle";
import Mobile from "../../pages/playGamesAi/edit/Mobile";
import Esports from "../../pages/playGamesAi/edit/Esports";
import Rmg from "../../pages/playGamesAi/edit/Rmg";
import Card from "../../pages/playGamesAi/edit/Card";
import Raiders from "../../pages/playGamesAi/edit/Raiders";
import Car from "../../pages/playGamesAi/edit/Car";
import Cricket from "../../pages/playGamesAi/edit/Cricket";
import Tennis from "../../pages/playGamesAi/edit/Tennis";
import Badminton from "../../pages/playGamesAi/edit/Badminton/Badminton";
import SiderBar from "../Sidebar";
import Post from "../../pages/playGamesAi/Post";
import styled from "styled-components";

import PlaySingleArticle from "../../pages/playGamesAi/edit/SingleArticle/SingleArticle";
import GameInformation from "../../pages/playGamesAi/edit/GameInformation";
import Vehicles from "../../pages/playGamesAi/edit/Vehicles";
import Sports from "../../pages/playGamesAi/edit/Sports";

import HinduSingleArticle from "../../pages/hinduHope/edit/SingleArticle";
import HinduPost from "../../pages/hinduHope/Post/Post";
import Boutiques from "../../pages/hinduHope/edit/Boutiques/Boutiques";
import FinancialNews from "../../pages/hinduHope/edit/FinancialNews/FinancialNews";
import WorldNews from "../../pages/hinduHope/edit/WorldNews/WorldNews";
import HinduVehicles from "../../pages/hinduHope/edit/Vehicles/Vehicles";

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

  const [slug, setSlug] = useState("");

  function BlogHinduPost() {
    let { slug } = useParams();
    let location = useLocation();

    useEffect(() => {
      setSlug(slug);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
      <>
        <HinduSingleArticle />
      </>
    );
  }

  function BlogPlayPost() {
    let { slug } = useParams();
    let location = useLocation();

    useEffect(() => {
      setSlug(slug);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
      <>
        <PlaySingleArticle />
      </>
    );
  }

  function JudgeUser({ component }) {
    if (user) {
      return <MainArea>{component}</MainArea>;
    } else {
      return <Login />;
    }
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <SlugContext.Provider value={{ slug, setSlug }}>
          <Router>
            {scrollToTop}
            {user && <SiderBar />}
            <Switch>
              <Route exact path="/">
                <JudgeUser component={<Home />} />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/playgame/post">
                <JudgeUser component={<Post />} />
              </Route>
              <Route exact path="/playgame/editgameinformation">
                <JudgeUser component={<GameInformation />} />
              </Route>
              <Route exact path="/playgame/editvehicles">
                <JudgeUser component={<Vehicles />} />
              </Route>
              <Route exact path="/playgame/editsports">
                <JudgeUser component={<Sports />} />
              </Route>
              <Route exact path="/playgame/edithome">
                <JudgeUser component={<HomeArticle />} />
              </Route>
              <Route exact path="/playgame/editrmg">
                <JudgeUser component={<Rmg />} />
              </Route>
              <Route exact path="/playgame/editmobile">
                <JudgeUser component={<Mobile />} />
              </Route>
              <Route exact path="/playgame/editesports">
                <JudgeUser component={<Esports />} />
              </Route>
              <Route exact path="/playgame/editcard">
                <JudgeUser component={<Card />} />
              </Route>
              <Route exact path="/playgame/editraiders">
                <JudgeUser component={<Raiders />} />
              </Route>
              <Route exact path="/playgame/editcar">
                <JudgeUser component={<Car />} />
              </Route>
              <Route exact path="/playgame/editcricket">
                <JudgeUser component={<Cricket />} />
              </Route>
              <Route exact path="/playgame/edittennis">
                <JudgeUser component={<Tennis />} />
              </Route>
              <Route exact path="/playgame/editbadminton">
                <JudgeUser component={<Badminton />} />
              </Route>
              <Route exact path="/hinduhope/post">
                <JudgeUser component={<HinduPost />} />
              </Route>
              <Route exact path="/hinduhope/editboutiques">
                <JudgeUser component={<Boutiques />} />
              </Route>
              <Route exact path="/hinduhope/editfinancialnews">
                <JudgeUser component={<FinancialNews />} />
              </Route>
              <Route exact path="/hinduhope/editvehicles">
                <JudgeUser component={<HinduVehicles />} />
              </Route>
              <Route exact path="/hinduhope/editworldnews">
                <JudgeUser component={<WorldNews />} />
              </Route>
              <Route exact path="/playgame/:slug">
                <JudgeUser component={<BlogPlayPost />} />
              </Route>
              <Route exact path="/hinduhope/:slug">
                <JudgeUser component={<BlogHinduPost />} />
              </Route>
            </Switch>
          </Router>
        </SlugContext.Provider>
      </AuthContext.Provider>
    </>
  );
}
