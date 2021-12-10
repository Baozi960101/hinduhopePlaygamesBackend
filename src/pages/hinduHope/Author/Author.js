import { useState } from "react";
import styled from "styled-components";
import { MainArea, PageTitle } from "../../../global/editArticle";
import { LoadingBox } from "../../../global/Loading";
import cross from "../../../images/cross.svg";

const AuthorTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 50px auto;
  box-sizing: border-box;
  border-bottom: 2px solid black;
  padding: 0 2.5% 20px 2.5%;
  font-size: 18px;
  font-weight: 600;
`;

const AuthorContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  border-bottom: 2px solid gray;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;

  & + & {
    margin: 20px auto;
  }
`;

const AuthorDeleteImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const AuthorContent = ({ name }) => {
  return (
    <AuthorContentBox>
      <div>{name}</div>
      <AuthorDeleteImg src={cross} />
    </AuthorContentBox>
  );
};

const AuthorAddButtomBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 30px auto;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
`;

const AuthorAddButtom = styled.button`
  width: 80px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 0;
`;

const AddBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(209, 203, 199, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0vh;
  overflow: hidden;
  transition: all 0.2s ease-in;

  ${(props) => props.$close && `height:100vh;`}
`;

const AddAreaBox = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 280px;
  overflow: hidden;
  background-color: white;
  padding: 20px 20px;
  box-sizing: border-box;
`;

const AddTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
`;

const AddInputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const AddInput = styled.input`
  width: 160px;
  font-size: 20px;
`;

const AddButtom = styled.button`
  width: 80px;
  padding: 5px 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

// function fetchAddAuthor(
//   name
// ) {
//   let data = new URLSearchParams();
//   data.append("name", name);
//   return fetch("", {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//     },
//     body: data,
//   });
// }

const AddArea = ({ onClick }) => {
  return (
    <AddAreaBox>
      <AuthorDeleteImg onClick={onClick} src={cross} />
      <AddTitle>新增使用者</AddTitle>
      <AddInputBox>
        <AddInput />
      </AddInputBox>
      <AddInputBox>
        <AddButtom>完成</AddButtom>
      </AddInputBox>
    </AddAreaBox>
  );
};

export default function Author() {
  const [addAuthorArea, setAddAuthorArea] = useState(false);

  function handleAdd() {
    setAddAuthorArea(!addAuthorArea);
  }

  return (
    <>
      <AddBackGround $close={addAuthorArea}>
        <AddArea onClick={handleAdd} />
      </AddBackGround>
      <MainArea>
        <PageTitle>查詢作者</PageTitle>
        <AuthorTitle>
          <div>作者名</div>
          <div>刪除</div>
        </AuthorTitle>
        <AuthorContent name="John" />
        <AuthorContent name="Tim" />
        <AuthorContent name="Hank" />
        <AuthorContent name="Ray" />
        <AuthorContent name="Eric" />
        <AuthorAddButtomBox>
          <AuthorAddButtom onClick={handleAdd}>新增</AuthorAddButtom>
        </AuthorAddButtomBox>
      </MainArea>
    </>
  );
}
