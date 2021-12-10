import styled from "styled-components";
import cross from "../images/cross.svg";
import edit from "../images/edit.svg";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";
import { Link } from "react-router-dom";

const Goto = styled(Link)`
  text-decoration: none;
`;

export const MainArea = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const PageTitle = styled.div`
  background-color: #f2f7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 15px;
`;

const RuleBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-weight: 600;
`;

export const SourseBox = styled.div`
  display: block;

  ${(props) => props.$switch && `display: none;`}
`;

export const MyselfBox = styled.div`
  display: none;

  ${(props) => props.$switch && `display: block;`}
`;

const TypeTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

const Type = styled.select`
  margin-left: 10px;
  margin-right: 20px;
  width: 150px;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
`;

export const SwitchType = ({ setType }) => {
  return (
    <>
      <TypeTitle>
        分類 :
        <Type
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="myself">自行創建</option>
          <option value="GameInformation">Game Information</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Sports">Sports</option>
        </Type>
      </TypeTitle>
    </>
  );
};

export const Rule = () => {
  return (
    <RuleBox>
      <ArticleOptionImg
        src={cross}
        style={{ marginRight: "10px", cursor: "auto" }}
      />
      刪除文章
      <ArticleOptionImg
        src={edit}
        style={{ margin: "0px 10px 0 30px", cursor: "auto" }}
      />
      編輯文章
    </RuleBox>
  );
};

export const ArticleArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ArticleBox = styled.div`
  background-color: #f2f7ff;
  border: 1px solid #85b4ff;
  box-sizing: border-box;
  border-radius: 20px;
  width: 18%;
  height: 300px;
  margin-top: 30px;
  padding: 10px 2%;

  @media screen and (max-width: 1250px) {
    width: 31%;
  }
  @media screen and (max-width: 1000px) {
    width: 48%;
  }
`;

const ArticleOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  margin: auto;
`;

const ArticleOptionImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const ArticleImgArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  overflow: hidden;
  margin-top: 10px;
`;

const ArticleImg = styled.img`
  width: 100%;
`;

const ArticleTitle = styled.div`
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  overflow: hidden;
`;

const ArticleContent = styled.div`
  width: 100%;
  height: 65px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  overflow: hidden;
`;

export const Article = ({ id, src, title, content, clickDelet, clickEdit }) => {
  return (
    <>
      <ArticleBox id={id}>
        <ArticleOption>
          <ArticleOption>
            <ArticleOptionImg src={cross} onClick={clickDelet} />
          </ArticleOption>
        </ArticleOption>
        <ArticleImgArea>
          <ArticleImg src={src} />
        </ArticleImgArea>
        <ArticleTitle>{title.substring(0, 30)}</ArticleTitle>
        <ArticleContent>{content.substring(0, 50)}</ArticleContent>
      </ArticleBox>
    </>
  );
};

export const MyselftArticle = ({ id, content, clickDelet, to, src, title }) => {
  return (
    <>
      <ArticleBox id={id}>
        <ArticleOption>
          <ArticleOption>
            <ArticleOptionImg src={cross} onClick={clickDelet} />
            <Goto to={to}>
              <ArticleOptionImg src={edit} />
            </Goto>
          </ArticleOption>
        </ArticleOption>
        <ArticleImgArea>
          <ArticleImg src={src} />
        </ArticleImgArea>
        <ArticleTitle>{title.substring(0, 30)}</ArticleTitle>
        <ArticleContent>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </ArticleContent>
      </ArticleBox>
    </>
  );
};

export const HinduMyselftArticle = ({ id, content, clickDelet, to }) => {
  return (
    <>
      <ArticleBox id={id}>
        <ArticleOption>
          <ArticleOption>
            <ArticleOptionImg src={cross} onClick={clickDelet} />
            <Goto to={`/hinduhope${to}`}>
              <ArticleOptionImg src={edit} />
            </Goto>
          </ArticleOption>
        </ArticleOption>
        <ArticleContent style={{ height: "200px" }}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </ArticleContent>
      </ArticleBox>
    </>
  );
};

const PageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  box-sizing: border-box;
  font-size: 23px;
  margin-bottom: 40px;
`;

const PrevButton = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
  cursor: pointer;
`;

const NextButton = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 30px;
  cursor: pointer;
`;

export const ChangePageButton = ({ changePrevPage, changeNextPage, page }) => {
  return (
    <PageBox>
      <PrevButton onClick={changePrevPage} src={leftArrow} />
      {page}
      <NextButton onClick={changeNextPage} src={rightArrow} />
    </PageBox>
  );
};
