import styled from "styled-components";
import { Link } from "react-router-dom";
import playGamesLongLogo from "../../images/playGamesLongLogo.svg";
import down from "../../images/down.svg";
import { useState } from "react";

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
  align-items: center;
  height: 150px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
  cursor: pointer;
  border-bottom: 1px solid #c9c4d4;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 70%;
  height: auto;
  margin: 0 auto;
`;

const ListTitle = styled.div`
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
  padding-left: 40px;
  color: black;
  transition: height 0.3s ease-in-out;

  ${(props) => props.$close && `height: 40px;`}

  :hover {
    background-color: #f2f7ff;
  }
`;

function loginOut() {
  Swal.fire("登出成功");
}

export default function Sidebar() {
  const [editArticle, setEditArticle] = useState(false);

  function handleEdit() {
    setEditArticle(!editArticle);
  }

  return (
    <>
      <SidebarBox>
        <Goto to="/">
          <SidebarLogo>
            <Logo alt="Play Games" src={playGamesLongLogo} />
          </SidebarLogo>
        </Goto>
        <Goto to="/article">
          <ListTitle>文章列表</ListTitle>
        </Goto>
        <Goto to="/search">
          <ListTitle>查詢文章</ListTitle>
        </Goto>
        <Goto to="/post">
          <ListTitle>發表文章</ListTitle>
        </Goto>
        <ListTitle onClick={handleEdit}>
          編輯文章
          <DownImg src={down} />
        </ListTitle>
        <Goto to="/editrmg">
          <ListSubTitle $close={editArticle}>RMG</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>手機遊戲</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>電子競技遊戲</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>紙牌遊戲</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>競技攻略</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>汽車資訊</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>板球</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>網球</ListSubTitle>
        </Goto>
        <Goto>
          <ListSubTitle $close={editArticle}>羽毛球</ListSubTitle>
        </Goto>
        <Goto to="/login">
          <ListTitle onClick={loginOut}>登出</ListTitle>
        </Goto>
      </SidebarBox>
    </>
  );
}
