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
import Home from "../../pages/Home";
import HomeArticle from "../../pages/playGamesAi/edit/HomeArticle";
import SiderBar from "../Sidebar";
import Post from "../../pages/playGamesAi/Post";
import styled from "styled-components";

import PlaySingleArticle from "../../pages/playGamesAi/edit/SingleArticle/SingleArticle";

import SearchPlay from "../../pages/playGamesAi/Search";
import SearchHindu from "../../pages/hinduHope/Search/Search";
import AuthorPlay from "../../pages/playGamesAi/Author";
import AuthorHindu from "../../pages/hinduHope/Author";

import HinduSingleArticle from "../../pages/hinduHope/edit/SingleArticle";
import HinduPost from "../../pages/hinduHope/Post/Post";

import Script from "../../pages/Script/script";

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
              <Route exact path="/playgame/search">
                <JudgeUser component={<SearchPlay />} />
              </Route>
              <Route exact path="/playgame/author">
                <JudgeUser component={<AuthorPlay />} />
              </Route>
              <Route exact path="/hinduhope/post">
                <JudgeUser component={<HinduPost />} />
              </Route>
              <Route exact path="/hinduhope/search">
                <JudgeUser component={<SearchHindu />} />
              </Route>
              <Route exact path="/hinduhope/author">
                <JudgeUser component={<AuthorHindu />} />
              </Route>
              <Route exact path="/script">
                <JudgeUser component={<Script />} />
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
