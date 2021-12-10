import React, { useEffect, useState } from "react";
import {
  MainArea,
  ArticleArea,
  PageTitle,
  SwitchType,
  Article,
  HinduMyselftArticle,
  ChangePageButton,
  SourseBox,
  MyselfBox,
} from "../../../../global/editArticle";
import useHandleArticle from "../../../../global/useHandleArticle";
import { LoadingBox } from "../../../../global/Loading";
import { scrollToTop } from "../../../../global/scroll";
import styled from "styled-components";

const myself = {
  data: [
    {
      crawler_No: 864601,
      crawler_Content: `<p>自己新增的文章</p>
      <img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" alt="undefined" style="height: auto;width: auto"/>
      <p></p>
      <p>&nbsp;110年11月25日</p>`,
    },
    {
      crawler_No: 864602,
      crawler_Content: `<p>自己新增的文章</p>
      <img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" alt="undefined" style="height: auto;width: auto"/>
      <p></p>
      <p>&nbsp;110年11月25日</p>`,
    },
    {
      crawler_No: 864603,
      crawler_Content: `<p>自己新增的文章</p>
      <img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" alt="undefined" style="height: auto;width: auto"/>
      <p></p>
      <p>&nbsp;110年11月25日</p>`,
    },
    {
      crawler_No: 864604,
      crawler_Content: `<p>自己新增的文章</p>
      <img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" alt="undefined" style="height: auto;width: auto"/>
      <p></p>
      <p>&nbsp;110年11月25日</p>`,
    },
    {
      crawler_No: 864605,
      crawler_Content: `<p>自己新增的文章</p>
      <img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" alt="undefined" style="height: auto;width: auto"/>
      <p></p>
      <p>&nbsp;110年11月25日</p>`,
    },
  ],
};

export default function FinancialNews() {
  const {
    post,
    page,
    ChangeNextPage,
    ChangePrevPage,
    deletArticle,
    financialNewsPageArticle,
    load,
  } = useHandleArticle();

  const [myselfArticleData, setMyselfArticleData] = useState([]);

  const [type, setType] = useState(true);

  useEffect(() => {
    setMyselfArticleData(myself.data);
    scrollToTop();
    financialNewsPageArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {load && <LoadingBox />}
      <MainArea>
        <PageTitle>Financial News</PageTitle>
        <SwitchType setType={setType} />
        <MyselfBox $switch={type}>
          <ArticleArea>
            {myselfArticleData.map((data) => {
              return (
                <HinduMyselftArticle
                  key={data.crawler_No}
                  id={data.crawler_No}
                  to={`/${data.crawler_No}`}
                  content={data.crawler_Content}
                  clickDelet={() => {
                    deletArticle(data.crawler_No);
                  }}
                />
              );
            })}
          </ArticleArea>
        </MyselfBox>
        <SourseBox $switch={type}>
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
        </SourseBox>
      </MainArea>
    </>
  );
}
