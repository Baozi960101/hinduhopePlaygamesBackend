import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { SetUserToken, SetAuthToken, GetUserToken } from "../../global/utils";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../global/context";
import tickImg from "../../images/tick.svg";
import padLockImg from "../../images/padLock.svg";
import userImg from "../../images/user.svg";
import { LoginApi, FirstCheckUser } from "../../global/API";
import playGamesLongLogo from "../../images/playGamesLongLogo.svg";
import hinduHopeLogo from "../../images/hinduHopeLogo.svg";

const Swal = require("sweetalert2");

const LoginBackGround = styled.div`
  background-color: #f7f8fa;
  /* background: radial-gradient(circle at center, #fbfbff, white); */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 350px;
`;

const LoginLogoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const LoginLogoImg = styled.img`
  width: 180px;
  height: 80px;
  box-sizing: border-box;
`;

const LoginLogo02Img = styled.img`
  width: 90px;
  height: 90px;
  box-sizing: border-box;
`;

// const Announcement = styled.marquee`
//   width: 90%;
//   display: flex;
//   align-items: center;
//   font-size: 16px;
//   display: flex;
//   margin: auto;
//   background-color: white;
//   letter-spacing: 1px;
//   margin-bottom: 20px;
//   border-radius: 5px;
//   height: 35px;
//   font-weight: 500;
// `;

const LoginBox = styled.div`
  width: 100%;
  height: 290px;
  background-color: white;
  border-radius: 15px;
  border: 5px #f0f0f0 solid;
  padding: 0 20px;
  color: white;
`;
const LoginBoxTitle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 600;
  font-size: 20px;
`;

const LoginUserName = styled.input`
  width: 100%;
  height: 35px;
  padding: 2px 13px;
  outline: none;
  border: 2px #f0f0f0 solid;
  border-radius: 5px;
  color: #6c6c6c;
  font-size: 15px;
  background-color: #f3f3f3;
`;

const LoginUserNameImg = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  margin-top: 10px;
`;

const LoginPassNameImg = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const LoginInputUser = ({ LoginImg, value, onChange }) => {
  return (
    <div
      style={{ position: "relative", display: "flex", marginBottom: "30px" }}
    >
      <LoginUserNameImg src={LoginImg} />
      <LoginUserName value={value} onChange={onChange} />
    </div>
  );
};

const LoginInputPassword = ({
  LoginImg,
  value,
  type,
  onClick,
  onChange,
  onKeyDown,
}) => {
  return (
    <div
      style={{ position: "relative", display: "flex", marginBottom: "20px" }}
    >
      <LoginPassNameImg onClick={onClick} src={LoginImg} />
      <LoginUserName type={type} value={value} onChange={onChange} />
    </div>
  );
};

const LoginButtomDiv = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 14px;
  color: white;
`;

const Remember = styled.div`
  display: flex;
  cursor: pointer;
  color: black;
`;

const LoginButton = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #005954;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;

  :active {
    box-shadow: 0 1px 0 #bebebe;
  }
`;

const LoginRememberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  border: 1px solid black;
  margin-top: 1px;
  margin-right: 4px;
`;

const LoginRememberTick = styled.img`
  width: 100%;
  height: 100%;
`;

const ForgetBox = styled.div`
  width: 100%;
  align-items: center;
  font-size: 14px;
  color: black;
  cursor: pointer;
  font-weight: 600;
`;

const LoginButtomBox = ({ OnTick, img, onClickUser, onClickLogin }) => {
  return (
    <LoginButtomDiv>
      <Remember onClick={onClickUser}>
        <LoginRememberBox>
          {OnTick && <LoginRememberTick src={img} />}
        </LoginRememberBox>
        記住我的帳號
      </Remember>
      <LoginButton onClick={onClickLogin}>登入</LoginButton>
    </LoginButtomDiv>
  );
};

function loginClick(account, password, loginGO) {
  if (account === "") {
    Swal.fire("請填入帳號");
    return;
  }
  if (password === "") {
    Swal.fire("請填入密碼");
    return;
  }
  if (password === "xxxx123" && account === "xxxx123") {
    loginGO();
    return;
  }
  Swal.fire("密碼錯誤");
}

export default function Login() {
  let history = useHistory();
  const { setUser } = useContext(AuthContext);
  const [passwordWatch, setPasswordWatch] = useState(true);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [rememberTick, setRememberTick] = useState(false);
  const [load, setload] = useState(false);

  // useEffect(() => {
  //   if (GetUserToken()) {
  //     setAccount(GetUserToken());
  //     setRememberTick(true);
  //   }
  // }, []);

  function onChangeAccount(e) {
    setAccount(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function watch() {
    if (passwordWatch) {
      setPasswordWatch(false);
    } else {
      setPasswordWatch(true);
    }
  }

  function rememberUser() {
    if (!rememberTick) {
      SetUserToken(account);
      setRememberTick(true);
    } else {
      SetUserToken("");
      setRememberTick(false);
    }
  }

  // async function loginGO() {
  //   const res = await LoginApi(account, password);
  //   if (res.status === 422) {
  //     Swal.fire("帳密錯誤");
  //     setload(false);
  //     return;
  //   } else if (res.status === 401) {
  //     Swal.fire("帳密錯誤");
  //     setload(false);
  //     return;
  //   }
  //   const data = await res.json();
  //   try {
  //     if (rememberTick) {
  //       SetUserToken(account);
  //     }
  //     SetAuthToken(data.access_token);
  //   } catch (error) {
  //     setload(false);
  //   }
  //   // 設置Token的地方
  //   // const checkRes = await FirstCheckUser(data.access_token);
  //   // const dataCheck = await checkRes.json();
  //   // setUser(dataCheck.data);
  //   setload(false);
  //   Swal.fire("登入成功!", "", "success");
  //   History.push("/");
  // }

  function loginGO() {
    Swal.fire("登入成功!", "", "success");
    setUser(true);
    history.push("/");
  }

  return (
    <>
      <LoginBackGround>
        <Box>
          <LoginLogoBox>
            <LoginLogoImg src={playGamesLongLogo} />
            <LoginLogo02Img src={hinduHopeLogo} />
          </LoginLogoBox>
          <LoginBox>
            <LoginBoxTitle>登入系統</LoginBoxTitle>
            <LoginInputUser
              LoginImg={userImg}
              value={account}
              onChange={onChangeAccount}
            />
            <LoginInputPassword
              type={passwordWatch ? "password" : "text"}
              LoginImg={padLockImg}
              value={password}
              onClick={watch}
              onChange={onChangePassword}
            />
            <ForgetBox>忘記密碼 ?</ForgetBox>
            <LoginButtomBox
              img={tickImg}
              onClickUser={rememberUser}
              OnTick={rememberTick}
              onClickLogin={() => {
                loginClick(account, password, loginGO);
              }}
            />
          </LoginBox>
        </Box>
      </LoginBackGround>
    </>
  );
}
