import { useEffect, useState } from "react";
import { MainArea, PageTitle } from "../../global/editArticle";
import styled from "styled-components";
import { LoadingBox } from "../../global/Loading";
import { scriptApi } from "../../global/API";

const Swal = require("sweetalert2");

const ConditionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5%;
  box-sizing: border-box;
`;

const ConditionInput = styled.input`
  width: 180px;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
`;

const ConditionInputBox = ({ value, onChange }) => {
  return (
    <>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>
        請輸入生成關鍵字
        <ConditionInput value={value} onChange={onChange} />
      </div>
    </>
  );
};

const ConditionInputButton = styled.button`
  cursor: pointer;
  width: 60px;
  height: 30px;
  font-size: 16px;
  margin: 40px 0;
`;

export const ArticleBox = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 20px;
  box-shadow: 3px 3px 5px 1px #f7f8fa, 3px 2px 5px 1px #dce1e8;
`;

const ArticleResulTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const ArticleResulText = styled.p`
  color: black;
  font-size: 18px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ArticleResult = ({ text }) => {
  return (
    <>
      <ArticleResulTitle>本文</ArticleResulTitle>
      <ArticleResulText>{text}</ArticleResulText>
    </>
  );
};

function colorChange(keywordValue) {
  let articleId = document.getElementById("articleId");
  let keyWord = new RegExp(keywordValue, "g");
  let articleIndex = articleId.getElementsByTagName("p");
  for (let i = 0; i < articleIndex.length; i++) {
    articleIndex[i].innerHTML = articleIndex[i].innerHTML.replace(
      keyWord,
      `<span style="color:red;font-weight:600">${keywordValue}</span>`
    );
  }
  //用for迴圈把id為articleId底下的p標籤節點都抓取
  //p標籤裡的所有關鍵字統一變色
}

const Error = styled.div`
  color: #f18b23;
  font-size: 20px;
  font-weight: 600;
  /* 
  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
  }
  @media screen and (max-width: 321px) {
    margin-top: 20px;
  } */
`;

export const ErrorText = () => {
  return <Error>文章產生載入比較久，請稍待片刻</Error>;
};

export const ResultTitle = styled.div`
  width: 100%;
  text-align: center;
  background-color: white;
  color: #f18b23;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-top: 10px;
`;

const ArticleResulBox = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
`;

function fetchScriptApi(value) {
  let data = new URLSearchParams();
  data.append("prefix", value);
  return fetch(scriptApi, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: data,
  });
}

export default function Script() {
  const [scriptPost, setScriptPost] = useState([]);
  const [keywordValue, setKeywordValue] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (scriptPost.length !== 0) {
      colorChange(keywordValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptPost]);

  async function scriptSearch(keywordValue) {
    if (keywordValue === "") {
      Swal.fire("請輸入關鍵字");
      return;
    }
    setLoad(true);
    let dataScript = new URLSearchParams();
    dataScript.append("prefix", keywordValue);
    const res = await fetchScriptApi(keywordValue);
    const data = await res.json();
    setScriptPost(data);
    setLoad(false);
  }

  function changekeyword(e) {
    setKeywordValue(e.target.value);
  }

  function articleOn() {
    return (
      <>
        {scriptPost &&
          scriptPost.map((data) => {
            return (
              <ArticleResult
                key={data.storage_No}
                text={data.storage_Content}
              />
            );
          })}
      </>
    );
  }

  return (
    <>
      {load && <LoadingBox />}
      <MainArea>
        <PageTitle>自動撰文</PageTitle>
        <ConditionArea>
          <ConditionInputBox value={keywordValue} onChange={changekeyword} />
          <ErrorText />
        </ConditionArea>
        <ConditionArea
          style={{ justifyContent: "flex-end", paddingRight: "50px" }}
        >
          <ConditionInputButton
            onClick={() => {
              scriptSearch(keywordValue);
            }}
          >
            搜尋
          </ConditionInputButton>
        </ConditionArea>
        {scriptPost.length !== 0 && (
          <ArticleBox>
            <ResultTitle>訓練結果</ResultTitle>
            <ArticleResulBox id="articleId">{articleOn()}</ArticleResulBox>
          </ArticleBox>
        )}
      </MainArea>
    </>
  );
}
