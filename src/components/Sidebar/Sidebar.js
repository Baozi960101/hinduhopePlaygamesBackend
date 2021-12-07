import styled from "styled-components";
import { Link } from "react-router-dom";
import playGamesLongLogo from "../../images/playGamesLongLogo.svg";
import hinduHopeLongLogo from "../../images/HinduHopeLongLogo.svg";
import down from "../../images/down.svg";
import { useState, useContext } from "react";
import { AuthContext } from "../../global/context";

const Swal = require("sweetalert2");

const Goto = styled(Link)`
  text-decoration: none;
`;

const SidebarBox = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
  position: fixed;
  left: 0;
  padding: 0 20px;
  border-right: 1px solid #e8eaed;
  /* box-shadow: 0px 10px 5px 8px #009ba3, 0px 5px 3px 0 #dce1e8; */
  ::-webkit-scrollbar {
    width: 3px;
    height: 0px;
    background-color: #e8eaed;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    ${(props) => props.$close && `width:0px;`}
  }

  @media screen and (min-width: 769px) {
    ${(props) => props.$close && `width:80px`}
  }
`;

const DownImg = styled.img`
  width: 20px;
  height: 20px;
`;

const SidebarLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 170px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
  cursor: pointer;
  border-bottom: 1px solid #c9c4d4;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const ListMainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 10px;
  padding: 0 10px 0 20px;
  color: black;
`;

const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0px;
  overflow: hidden;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 10px;
  padding: 0 10px 0 30px;
  color: black;
  transition: height 0.2s ease-in-out;

  ${(props) => props.$close && `height: 50px;`}

  :hover {
    background-color: #f2f7ff;
  }
`;

const ListSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0px;
  overflow: hidden;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 10px;
  padding-left: 60px;
  color: black;
  transition: height 0.3s ease-in-out;

  ${(props) => props.$close && `height: 40px;`}

  :hover {
    background-color: #f2f7ff;
  }
`;

export default function Sidebar() {
  const [playGamesItem, setPlayGamesItem] = useState(false);
  const [hinduHopeItem, setHinduHopeItem] = useState(false);

  const [playEditArticle, setPlayEditArticle] = useState(false);
  const [hinduEditArticle, setHinduEditArticle] = useState(false);

  const { setUser } = useContext(AuthContext);

  function loginOut() {
    Swal.fire("登出成功");
    setUser(false);
  }

  function handlePlayItem() {
    if (playGamesItem) {
      setPlayGamesItem(false);
      setPlayEditArticle(false);
    } else {
      setPlayGamesItem(true);
    }
  }

  function handleHinduItem() {
    if (hinduHopeItem) {
      setHinduHopeItem(false);
      setHinduEditArticle(false);
    } else {
      setHinduHopeItem(true);
    }
  }

  function handlePlayEdit() {
    setPlayEditArticle(!playEditArticle);
  }

  function handleHinduEdit() {
    setHinduEditArticle(!hinduEditArticle);
  }

  return (
    <>
      <SidebarBox>
        <Goto to="/">
          <SidebarLogo>
            <Logo alt="Play Games" src={playGamesLongLogo} />
            <Logo alt="Play Games" src={hinduHopeLongLogo} />
          </SidebarLogo>
        </Goto>
        {/* <Goto to="/search">
          <ListTitle>查詢文章</ListTitle>
        </Goto> */}
        <ListMainTitle onClick={handlePlayItem}>
          Play Games
          <DownImg src={down} />
        </ListMainTitle>
        <Goto to="/playgame/post">
          <ListTitle $close={playGamesItem}>發表文章</ListTitle>
        </Goto>
        <ListTitle $close={playGamesItem} onClick={handlePlayEdit}>
          編輯文章
          <DownImg src={down} />
        </ListTitle>
        {/* <Goto to="/edithome">
          <ListSubTitle $close={playEditArticle}>Home</ListSubTitle>
        </Goto> */}
        <Goto to="/playgame/editgameinformation">
          <ListSubTitle $close={playEditArticle}>Game Information</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editvehicles">
          <ListSubTitle $close={playEditArticle}>Vehicles</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editsports">
          <ListSubTitle $close={playEditArticle}>Sports</ListSubTitle>
        </Goto>
        {/* <Goto to="/playgame/editrmg">
          <ListSubTitle $close={playEditArticle}>RMG</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editmobile">
          <ListSubTitle $close={playEditArticle}>手機遊戲</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editesports">
          <ListSubTitle $close={playEditArticle}>電子競技遊戲</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editcard">
          <ListSubTitle $close={playEditArticle}>紙牌遊戲</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editraiders">
          <ListSubTitle $close={playEditArticle}>競技攻略</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editcar">
          <ListSubTitle $close={playEditArticle}>汽車資訊</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editcricket">
          <ListSubTitle $close={playEditArticle}>板球</ListSubTitle>
        </Goto>
        <Goto to="/playgame/edittennis">
          <ListSubTitle $close={playEditArticle}>網球</ListSubTitle>
        </Goto>
        <Goto to="/playgame/editbadminton">
          <ListSubTitle $close={playEditArticle}>羽毛球</ListSubTitle>
        </Goto> */}
        <ListMainTitle onClick={handleHinduItem}>
          HinduHope
          <DownImg src={down} />
        </ListMainTitle>
        <Goto to="/hinduhope/post">
          <ListTitle $close={hinduHopeItem}>發表文章</ListTitle>
        </Goto>
        <ListTitle $close={hinduHopeItem} onClick={handleHinduEdit}>
          編輯文章
          <DownImg src={down} />
        </ListTitle>
        <Goto to="/hinduhope/editboutiques">
          <ListSubTitle $close={hinduEditArticle}>Boutiques</ListSubTitle>
        </Goto>
        <Goto to="/hinduhope/editvehicles">
          <ListSubTitle $close={hinduEditArticle}>Vehicles</ListSubTitle>
        </Goto>
        <Goto to="/hinduhope/editworldnews">
          <ListSubTitle $close={hinduEditArticle}>World News</ListSubTitle>
        </Goto>
        <Goto to="/hinduhope/editfinancialnews">
          <ListSubTitle $close={hinduEditArticle}>Financial News</ListSubTitle>
        </Goto>
        <Goto to="/script">
          <ListMainTitle>自動撰文</ListMainTitle>
        </Goto>
        <Goto to="/login">
          <ListMainTitle onClick={loginOut}>登出</ListMainTitle>
        </Goto>
      </SidebarBox>
    </>
  );
}
