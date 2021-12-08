import styled from "styled-components";
import { MainArea, PageTitle } from "../../global/editArticle";
import playGamesLongLogo from "../../images/playGamesLongLogo.svg";
import hinduHopeLongLogo from "../../images/HinduHopeLongLogo.svg";

const Logoimg = styled.img`
  width: 350px;
  cursor: pointer;
`;
const ContentArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  margin-bottom: 45px;
`;

const TopBorder = styled.div`
  width: 85%;
  margin: 0 auto;
  border-top: 3px solid #adcdff;
`;

const ContentTitle = styled.div`
  margin: 30px 0 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;

  & + & {
    margin-bottom: 90px;
  }
`;

const ContentText = styled.div`
  padding: 0 30px;
  width: 100%;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
`;

export default function Home() {
  return (
    <>
      <MainArea>
        <PageTitle>首頁</PageTitle>
        <ContentArea>
          <Logoimg
            onClick={() => {
              window.open("https://playgames.ai/#/");
            }}
            src={playGamesLongLogo}
          />
          <Logoimg
            onClick={() => {
              window.open("https://hinduhope.com/#/");
            }}
            src={hinduHopeLongLogo}
          />
        </ContentArea>
        <TopBorder />
        <ContentTitle>
          使用者你好，歡迎來到 Playgames & Hinduhope 後台管理系統
        </ContentTitle>
        <ContentTitle>如有公告會統一在此進行說明</ContentTitle>
        <ContentText>
          您可藉由左側來進行後續功能，依網站區分為兩個項目之運行 <br />
          <br />
          編輯文章目前只能依照使用者自行新增的文章去做修改，但刪除功能可套用至所有文章。
          <br />
          <br />
          自動撰文功能目前尚在測試中。
        </ContentText>
      </MainArea>
    </>
  );
}
