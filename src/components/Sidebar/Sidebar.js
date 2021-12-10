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

export default function Sidebar() {
  const [playGamesItem, setPlayGamesItem] = useState(false);
  const [hinduHopeItem, setHinduHopeItem] = useState(false);

  const { setUser } = useContext(AuthContext);

  function loginOut() {
    Swal.fire("登出成功");
    setUser(false);
  }

  function handlePlayItem() {
    if (playGamesItem) {
      setPlayGamesItem(false);
    } else {
      setPlayGamesItem(true);
    }
  }

  function handleHinduItem() {
    if (hinduHopeItem) {
      setHinduHopeItem(false);
    } else {
      setHinduHopeItem(true);
    }
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
        <ListMainTitle onClick={handlePlayItem}>
          Play Games
          <DownImg src={down} />
        </ListMainTitle>
        <Goto to="/playgame/post">
          <ListTitle $close={playGamesItem}>發表文章</ListTitle>
        </Goto>
        <Goto to="/playgame/search">
          <ListTitle $close={playGamesItem}>查詢文章</ListTitle>
        </Goto>
        <Goto to="/playgame/author">
          <ListTitle $close={playGamesItem}>查詢作者</ListTitle>
        </Goto>
        <ListMainTitle onClick={handleHinduItem}>
          HinduHope
          <DownImg src={down} />
        </ListMainTitle>
        <Goto to="/hinduhope/post">
          <ListTitle $close={hinduHopeItem}>發表文章</ListTitle>
        </Goto>
        <Goto to="/hinduhope/search">
          <ListTitle $close={hinduHopeItem}>查詢文章</ListTitle>
        </Goto>
        <Goto to="/hinduhope/author">
          <ListTitle $close={hinduHopeItem}>查詢作者</ListTitle>
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
