import React, { useEffect, useState } from "react";
import {
  MainArea,
  ArticleArea,
  PageTitle,
  Article,
  MyselftArticle,
  ChangePageButton,
} from "../../../global/editArticle";
import useHandleArticle from "../../../global/useHandleArticle";
import { LoadingBox } from "../../../global/Loading";
import styled from "styled-components";

const myself = {
  data: [
    {
      crawler_No: 14129,
      crawler_Web: "digit",
      crawler_Cate: "",
      crawler_Url:
        "https://www.digit.in/news/gaming/garena-free-fire-x-money-heist-event-gives-players-the-chance-to-earn-exclusive-sports-car-skin-62153.html",
      crawler_Title:
        "Garena Free Fire x Money Heist event gives players the chance to earn exclusive sports car skin",
      crawler_Content:
        "Garena Free Fire has partnered with the popular Netflix TV show Money Heist to offer players the chance to earn various in-game items. This includes skins for various in-game items. Players can unlock these via banknotes that they can earn by completing various in-game daily challenges. Ready to raid? Complete the daily challenges in-game now to get banknotes and exchange the banknotes exciting Free Fire x Money Heist Collaboration rewards such as the exclusive Free Fire x Money Heist Sports Car!#FreeFirexLCDP5 #FreeFire #IndiaKaBattleRoyale #Booyah pic.twitter.com/HiQNr0dQSp— Free Fire India Official (@IndiaFreeFire) December 5, 2021Garena Free Fire x Money Heist collaboration: DetailsThe banknotes that players will earn by completing daily missions can be used to unlock the various rewards. The highlight is the exclusive Free Fire x Money Heist Sports Car. This event will go on till December 14. So players have another week to earn Banknotes. Aside from this, players can also earn additional Money Heist themed items in the Reload Target Down event. The rewards include the Gold Vault Gloo Wall skin, Bag O’ Cash backpack and the Red Robster skin for the Vector SMG. This event will end on December 12. Sight locked and ready to fire! More Money Heist items to be won in the Reload Target Down event including the Gold Vault Gloo Wall skin and the Red Robster Vector gun skin!Collect them all now before the event ends on the 12th December 2021.#FreeFire #IndiaKaBattleRoyale pic.twitter.com/szV4NgRP2w— Free Fire India Official (@IndiaFreeFire) December 6, 2021Garena Free Fire was recently updated with the New Age patch that rebalanced some key in-game characters. The notable change was to Chrono, who saw a considerable nerf to his ability. To recall, Chrono comes with an active ability that creates a force field around the user. Called Time Warp, this lets players fire out from inside the field, while any attack would be absorbed for a limited time. After the update, players on the inside of the force field will no longer be able to fire through the shield. To counter this, the HP of the shield has been increased to make it more durable.Also Read: Garena Free Fire Nerfs Abilities Of Cristiano Ronaldo-Based Character, Chrono",
      crawler_PicUrl:
        "https://static.digit.in/default/418f6f4d3229b587774161d9a4b93746db9419cd.jpeg",
      crawler_Keyword: "",
      crawler_Date: "2021-12-07",
      crawler_Time: "23:02:00",
    },
    {
      crawler_No: 14129,
      crawler_Web: "digit",
      crawler_Cate: "",
      crawler_Url:
        "https://www.digit.in/news/gaming/garena-free-fire-x-money-heist-event-gives-players-the-chance-to-earn-exclusive-sports-car-skin-62153.html",
      crawler_Title:
        "Garena Free Fire x Money Heist event gives players the chance to earn exclusive sports car skin",
      crawler_Content:
        "Garena Free Fire has partnered with the popular Netflix TV show Money Heist to offer players the chance to earn various in-game items. This includes skins for various in-game items. Players can unlock these via banknotes that they can earn by completing various in-game daily challenges. Ready to raid? Complete the daily challenges in-game now to get banknotes and exchange the banknotes exciting Free Fire x Money Heist Collaboration rewards such as the exclusive Free Fire x Money Heist Sports Car!#FreeFirexLCDP5 #FreeFire #IndiaKaBattleRoyale #Booyah pic.twitter.com/HiQNr0dQSp— Free Fire India Official (@IndiaFreeFire) December 5, 2021Garena Free Fire x Money Heist collaboration: DetailsThe banknotes that players will earn by completing daily missions can be used to unlock the various rewards. The highlight is the exclusive Free Fire x Money Heist Sports Car. This event will go on till December 14. So players have another week to earn Banknotes. Aside from this, players can also earn additional Money Heist themed items in the Reload Target Down event. The rewards include the Gold Vault Gloo Wall skin, Bag O’ Cash backpack and the Red Robster skin for the Vector SMG. This event will end on December 12. Sight locked and ready to fire! More Money Heist items to be won in the Reload Target Down event including the Gold Vault Gloo Wall skin and the Red Robster Vector gun skin!Collect them all now before the event ends on the 12th December 2021.#FreeFire #IndiaKaBattleRoyale pic.twitter.com/szV4NgRP2w— Free Fire India Official (@IndiaFreeFire) December 6, 2021Garena Free Fire was recently updated with the New Age patch that rebalanced some key in-game characters. The notable change was to Chrono, who saw a considerable nerf to his ability. To recall, Chrono comes with an active ability that creates a force field around the user. Called Time Warp, this lets players fire out from inside the field, while any attack would be absorbed for a limited time. After the update, players on the inside of the force field will no longer be able to fire through the shield. To counter this, the HP of the shield has been increased to make it more durable.Also Read: Garena Free Fire Nerfs Abilities Of Cristiano Ronaldo-Based Character, Chrono",
      crawler_PicUrl:
        "https://static.digit.in/default/418f6f4d3229b587774161d9a4b93746db9419cd.jpeg",
      crawler_Keyword: "",
      crawler_Date: "2021-12-07",
      crawler_Time: "23:02:00",
    },
    {
      crawler_No: 14129,
      crawler_Web: "digit",
      crawler_Cate: "",
      crawler_Url:
        "https://www.digit.in/news/gaming/garena-free-fire-x-money-heist-event-gives-players-the-chance-to-earn-exclusive-sports-car-skin-62153.html",
      crawler_Title:
        "Garena Free Fire x Money Heist event gives players the chance to earn exclusive sports car skin",
      crawler_Content: `<h4><span style="font-size: 14px;"><strong>ewgewggewgew</strong></span></h4>
      <h4>你好拉</h4>`,
      crawler_PicUrl:
        "https://static.digit.in/default/418f6f4d3229b587774161d9a4b93746db9419cd.jpeg",
      crawler_Keyword: "",
      crawler_Date: "2021-12-07",
      crawler_Time: "23:02:00",
    },
    {
      crawler_No: 14129,
      crawler_Web: "digit",
      crawler_Cate: "",
      crawler_Url:
        "https://www.digit.in/news/gaming/garena-free-fire-x-money-heist-event-gives-players-the-chance-to-earn-exclusive-sports-car-skin-62153.html",
      crawler_Title:
        "Garena Free Fire x Money Heist event gives players the chance to earn exclusive sports car skin",
      crawler_Content:
        "Garena Free Fire has partnered with the popular Netflix TV show Money Heist to offer players the chance to earn various in-game items. This includes skins for various in-game items. Players can unlock these via banknotes that they can earn by completing various in-game daily challenges. Ready to raid? Complete the daily challenges in-game now to get banknotes and exchange the banknotes exciting Free Fire x Money Heist Collaboration rewards such as the exclusive Free Fire x Money Heist Sports Car!#FreeFirexLCDP5 #FreeFire #IndiaKaBattleRoyale #Booyah pic.twitter.com/HiQNr0dQSp— Free Fire India Official (@IndiaFreeFire) December 5, 2021Garena Free Fire x Money Heist collaboration: DetailsThe banknotes that players will earn by completing daily missions can be used to unlock the various rewards. The highlight is the exclusive Free Fire x Money Heist Sports Car. This event will go on till December 14. So players have another week to earn Banknotes. Aside from this, players can also earn additional Money Heist themed items in the Reload Target Down event. The rewards include the Gold Vault Gloo Wall skin, Bag O’ Cash backpack and the Red Robster skin for the Vector SMG. This event will end on December 12. Sight locked and ready to fire! More Money Heist items to be won in the Reload Target Down event including the Gold Vault Gloo Wall skin and the Red Robster Vector gun skin!Collect them all now before the event ends on the 12th December 2021.#FreeFire #IndiaKaBattleRoyale pic.twitter.com/szV4NgRP2w— Free Fire India Official (@IndiaFreeFire) December 6, 2021Garena Free Fire was recently updated with the New Age patch that rebalanced some key in-game characters. The notable change was to Chrono, who saw a considerable nerf to his ability. To recall, Chrono comes with an active ability that creates a force field around the user. Called Time Warp, this lets players fire out from inside the field, while any attack would be absorbed for a limited time. After the update, players on the inside of the force field will no longer be able to fire through the shield. To counter this, the HP of the shield has been increased to make it more durable.Also Read: Garena Free Fire Nerfs Abilities Of Cristiano Ronaldo-Based Character, Chrono",
      crawler_PicUrl:
        "https://static.digit.in/default/418f6f4d3229b587774161d9a4b93746db9419cd.jpeg",
      crawler_Keyword: "",
      crawler_Date: "2021-12-07",
      crawler_Time: "23:02:00",
    },
    {
      crawler_No: 14129,
      crawler_Web: "digit",
      crawler_Cate: "",
      crawler_Url:
        "https://www.digit.in/news/gaming/garena-free-fire-x-money-heist-event-gives-players-the-chance-to-earn-exclusive-sports-car-skin-62153.html",
      crawler_Title:
        "Garena Free Fire x Money Heist event gives players the chance to earn exclusive sports car skin",
      crawler_Content:
        "Garena Free Fire has partnered with the popular Netflix TV show Money Heist to offer players the chance to earn various in-game items. This includes skins for various in-game items. Players can unlock these via banknotes that they can earn by completing various in-game daily challenges. Ready to raid? Complete the daily challenges in-game now to get banknotes and exchange the banknotes exciting Free Fire x Money Heist Collaboration rewards such as the exclusive Free Fire x Money Heist Sports Car!#FreeFirexLCDP5 #FreeFire #IndiaKaBattleRoyale #Booyah pic.twitter.com/HiQNr0dQSp— Free Fire India Official (@IndiaFreeFire) December 5, 2021Garena Free Fire x Money Heist collaboration: DetailsThe banknotes that players will earn by completing daily missions can be used to unlock the various rewards. The highlight is the exclusive Free Fire x Money Heist Sports Car. This event will go on till December 14. So players have another week to earn Banknotes. Aside from this, players can also earn additional Money Heist themed items in the Reload Target Down event. The rewards include the Gold Vault Gloo Wall skin, Bag O’ Cash backpack and the Red Robster skin for the Vector SMG. This event will end on December 12. Sight locked and ready to fire! More Money Heist items to be won in the Reload Target Down event including the Gold Vault Gloo Wall skin and the Red Robster Vector gun skin!Collect them all now before the event ends on the 12th December 2021.#FreeFire #IndiaKaBattleRoyale pic.twitter.com/szV4NgRP2w— Free Fire India Official (@IndiaFreeFire) December 6, 2021Garena Free Fire was recently updated with the New Age patch that rebalanced some key in-game characters. The notable change was to Chrono, who saw a considerable nerf to his ability. To recall, Chrono comes with an active ability that creates a force field around the user. Called Time Warp, this lets players fire out from inside the field, while any attack would be absorbed for a limited time. After the update, players on the inside of the force field will no longer be able to fire through the shield. To counter this, the HP of the shield has been increased to make it more durable.Also Read: Garena Free Fire Nerfs Abilities Of Cristiano Ronaldo-Based Character, Chrono",
      crawler_PicUrl:
        "https://static.digit.in/default/418f6f4d3229b587774161d9a4b93746db9419cd.jpeg",
      crawler_Keyword: "",
      crawler_Date: "2021-12-07",
      crawler_Time: "23:02:00",
    },
  ],
};

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

const SwitchType = ({ setType }) => {
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
          <option value="Boutiques">Boutiques</option>
          <option value="Vehicles">Vehicles</option>
          <option value="WorldNews">World News</option>
          <option value="FinancialNews">Financial News</option>
        </Type>
      </TypeTitle>
    </>
  );
};

export default function Search() {
  const {
    boutiquesPageArticle,
    hinduVehiclesPageArticle,
    worldNewsPageArticle,
    financialNewsPageArticle,
    post,
    page,
    ChangeNextPage,
    ChangePrevPage,
    deletArticle,
    load,
  } = useHandleArticle();

  const [myselfArticleData, setMyselfArticleData] = useState([]);

  const [type, setType] = useState("myself");

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (type === "myself") {
      setMyselfArticleData(myself.data);
      setShowPage(false);
      return;
    }
    if (type === "Boutiques") {
      boutiquesPageArticle();
      setShowPage(true);
      return;
    }
    if (type === "Vehicles") {
      hinduVehiclesPageArticle();
      setShowPage(true);
      return;
    }
    if (type === "WorldNews") {
      worldNewsPageArticle();
      setShowPage(true);
      return;
    }
    if (type === "FinancialNews") {
      financialNewsPageArticle();
      setShowPage(true);
      return;
    }
    // scrollToTop();
    // gameInformationPageArticle();
    // vehiclesPageArticle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <>
      {load && <LoadingBox />}
      <MainArea>
        <PageTitle>查詢文章</PageTitle>
        <SwitchType setType={setType} />
        {!showPage && (
          <>
            <ArticleArea>
              {myselfArticleData.map((data) => {
                return (
                  <MyselftArticle
                    key={data.crawler_No}
                    id={data.crawler_No}
                    to={`/hinduhope/${data.crawler_No}`}
                    src={data.crawler_PicUrl}
                    title={data.crawler_Title}
                    content={data.crawler_Content}
                    clickDelet={() => {
                      deletArticle(data.crawler_No);
                    }}
                  />
                );
              })}
            </ArticleArea>
          </>
        )}
        {showPage && (
          <>
            <ArticleArea>
              {post.map((data) => {
                return (
                  <Article
                    key={data.crawler_No}
                    id={data.crawler_No}
                    src={data.crawler_PicUrl}
                    title={data.crawler_Title}
                    content={data.crawler_Content}
                    clickDelet={() => {
                      deletArticle(data.crawler_No);
                    }}
                  />
                );
              })}
            </ArticleArea>
            <ChangePageButton
              changeNextPage={ChangeNextPage}
              changePrevPage={ChangePrevPage}
              page={page}
            />
          </>
        )}
      </MainArea>
    </>
  );
}
