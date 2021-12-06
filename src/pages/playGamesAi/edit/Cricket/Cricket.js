import React, { useEffect, useState } from "react";
import {
  MainArea,
  ArticleArea,
  PageTitle,
  Rule,
  Article,
  ChangePageButton,
} from "../../../../global/editArticle";
import useHandleArticle from "../../../../global/useHandleArticle";
import { LoadingBox } from "../../../../global/Loading";

// import { Editor } from "react-draft-wysiwyg";
// import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { convertFromRaw, EditorState } from "draft-js";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
// import styled from "styled-components";

const data = {
  data: [
    {
      crawler_No: 864601,
      crawler_Web: "yahoo",
      crawler_Cate: "",
      crawler_Url:
        "https://tw.news.yahoo.com/%E9%AB%98%E9%9B%84%E8%AD%A6%E7%A0%B4%E5%A4%A7%E5%9E%8B%E7%B6%B2%E8%B7%AF%E7%B0%BD%E8%B3%AD-%E5%9C%96-064423978.html",
      crawler_Title: "高雄警破大型網路簽賭 (圖)",
      crawler_Content:
        "高雄李姓組頭與林姓女股東為鳳山某大樓鄰居,兩人7月起共同經營網路賭博網站,以今彩539與香港六合彩經營網路賭博,經手新台幣9億多下注賭資,李男獲利初估達300萬元,鹽埕警方日前搜索查扣95萬元賭資,25日依賭博罪將2人送辦。(高雄鹽埕警分局提供)中央社記者洪學廣傳真 110年11月25日",
      crawler_PicUrl:
        "https://s.yimg.com/uu/api/res/1.2/wU_Qn_s79Lb0vbLPUdXb9Q--~B/aD01MDI7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/ko/cna.com.tw/81d30132e3c37e6c3ae60e08b0e61095",
      crawler_Keyword: "賭博網站",
      crawler_Date: "2021-11-25",
      crawler_Time: "14:44:23",
      crawler_Emo: "負面",
      crawler_EmoWeight: -3,
    },
    {
      crawler_No: 864545,
      crawler_Web: "yahoo",
      crawler_Cate: "",
      crawler_Url:
        "https://tw.news.yahoo.com/%E7%B1%B3%E9%81%94%E6%96%AF%E8%B2%A8%E8%88%B9%E6%B1%A1%E6%9F%93%E9%81%AD%E7%BD%B090%E8%90%AC%E6%9C%AA%E7%B9%B3-%E5%BD%B0%E5%88%86%E7%BD%B2%E7%A6%81%E9%9B%A2%E5%A2%83-%E7%AB%8B%E9%A6%AC%E7%B9%B310%E8%90%AC%E8%BE%A6%E5%88%86%E6%9C%9F-062903388.html",
      crawler_Title: "米達斯貨船污染遭罰90萬未繳 彰分署禁離境 立馬繳10萬辦分期",
      crawler_Content:
        "▲船舶公司同意分期繳納,彰化分署也同意撤銷前對這艘船所做的限制離境處分。(記者方一成翻攝)二十三日彰化分署成功執行由彰化縣環保局對米達斯雜貨船所開罰的九十萬元,船舶公司同意分九期繳納,而彰化分署也同意撤銷前對這艘船所做的限制離境處分。一0八年十二月六日,這艘遭罰的米達斯的雜貨船(原屬獅子山共和國),在彰化縣大城鄉三豐村的海岸擱淺,當時因為外籍船員受困船上無法下船,而引起國人注意。事後雖然成功的解決了船上外籍船員無法離船的人道問題;但由於這艘船上載有二十四.五公噸油品,在擱淺時被認定顯有污染之虞,因此當時的船公司遭彰化縣環境保護局依據違反海洋污染防治法裁處九十萬元。環保局在進行裁罰的程序當時,這艘船屬於獅子山共和國籍,船公司Jih Lung 國際貿易公司為一外國公司,公司住址位於塞席爾共和國的首都馬埃島上。彰化縣環保局依據行政程序法必須將裁處書送達上述的公司住所,由於我國在塞席爾共和國並無領事辦事處,只能囑託駐南非代表處代為送達裁處書。結果駐南非代表處由南非郵局寄送公司地址失敗,彰化縣環保局只能依法進行公示送達,並於公示送達期滿後,於今年十一月一日移送彰化分署執行。主任執行官胡天賜今(二十五)日表示,彰化分署調閱相關文件,發現米達斯雜貨船已在今年四月三十日成功脫困。隨即透過交通部航港局瞭解這艘船行蹤,得知該船目前正在高雄港進行船舶維修中,但船舶所有人已將它過戶給香港籍的新公司,船籍也變更為蒙古籍,船名也並變更,已明顯有脫產事由。為免其離境無法執行,故一方面立即依據海洋污染防治法第三十五條規定,發函港務機關在這艘船未將環保局的九十萬裁罰清償或提供足額擔保前,禁止它離境;另外也立即發函傳喚這艘船在臺灣的林姓船東到分署說明。林姓船東於二十二日下午委請訴訟代理人到彰化分署說明,表示他們公司並未收到環保局的裁處書,所以才沒繳納。但是他們有誠意要處理,因此彰化分署與新船舶所有人達成分期繳納協議,同意由第三人當擔保人後分九期(每期一個月)繳納,每月繳納十萬元,新船舶所有人立即於當天繳了十萬元。彰化分署也在擔保契約成立後,同意立即撤銷之前所發的限制船舶離境處分。胡天賜主任表示,本案船籍原為獅子山共和國,船舶公司在塞席爾共和國(Seychelles),在移送執行前,不但船公司從塞席爾共和國變更為香港公司,船籍也變更為蒙古籍,致使遭罰的船公司與現在的船舶分屬不同公司,堪稱分署成立以來最複雜的行政裁罰執行案件,增加了執行難度。但在彰化分署與彰化縣環保局的共同努力下,不到一個月內即成功執行,創下與該局協力合作新的里程碑,也共同為環境保護盡一份心力。",
      crawler_PicUrl:
        "https://s.yimg.com/uu/api/res/1.2/2JsnWVXDjeUnZWahHjvkUw--~B/aD03MTg7dz01Mzg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/ko/tssdnews.com.tw/2b785f5eb92228c700f3fe7e4dfc92be",
      crawler_Keyword: "彰化分署, 彰化",
      crawler_Date: "2021-11-25",
      crawler_Time: "14:29:03",
      crawler_Emo: "負面",
      crawler_EmoWeight: -10,
    },
    {
      crawler_No: 864533,
      crawler_Web: "yahoo",
      crawler_Cate: "",
      crawler_Url:
        "https://tw.news.yahoo.com/%E9%99%B3%E5%85%B6%E9%82%81%E7%B1%B2-%E6%8B%9C%E8%A8%97%E6%94%AF%E6%8C%81%E7%B8%BD%E9%A0%90%E7%AE%97%E5%8A%A0%E9%80%9F%E5%AF%A9%E8%AD%B0-064632556.html",
      crawler_Title: "陳其邁籲:拜託支持總預算加速審議",
      crawler_Content:
        "高雄市府明年度總預算等案11月4日付委未過,迄今過了3周,今(25)日下午將進行黨團協商。高雄市長陳其邁今(25)日再度喊話,除市府總預算案,還有4個墊付案、自治條例修正案等,都要拜託議會支持,以利加速審議。城中城大樓火災事故造成重大傷亡,高市議會認為市府有缺失認為「沒有負責,沒有預算」,以31票反對比26票同意,退回市府年度總預算、墊付等案。今天下午,國民黨、民進黨與無黨團結聯盟三黨總召進行黨團協商決定交付日期。陳其邁表示,他這段時間積極跟議會溝通,希望不要影響市政推動,市府有四個墊付案還有一個自治條例都跟公安、消安相關,希望一併加速審議。陳其邁認為,墊付案內涵蓋公安申報費用補貼費用,因為有些弱勢民眾第一次可能比較困難,而且有些沒有管委會,就由市府來幫忙,另有關防火避難設備,像消防門、灑水系統,若要貸款利息由市府補助,要快速改善至為重要;除總預算之外,墊付案跟自治條例修正都要拜託議會。城中城大火事故後,陳其邁宣布編列4千萬預算,專案補助大廈公安、消安申報費用,並針對5樓以下住宅、三大弱勢族群全面推動住警器專案補助措施。",
      crawler_PicUrl:
        "https://s.yimg.com/uu/api/res/1.2/5MH2kZZmk04CpBK5263eXQ--~B/aD04MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/ko/nownews.com/e1bb86680c6f43f561b39791f0ca4f17",
      crawler_Keyword: "陳其邁, 市府",
      crawler_Date: "2021-11-25",
      crawler_Time: "14:46:32",
      crawler_Emo: "負面",
      crawler_EmoWeight: -3,
    },
    {
      crawler_No: 864530,
      crawler_Web: "yahoo",
      crawler_Cate: "",
      crawler_Url:
        "https://tw.news.yahoo.com/%E9%B3%B3%E5%B1%B1%E6%BA%AA%E8%AE%8A%E7%B2%89%E8%89%B2-%E8%AD%B0%E5%93%A1%E6%B7%B1%E5%A4%9C%E7%9B%B4%E6%92%AD%E6%8A%93%E5%81%B7%E6%8E%92-064534715.html",
      crawler_Title: "鳳山溪變粉色 議員深夜直播抓偷排",
      crawler_Content:
        "國民黨高雄市議員李雅靜昨(24)夜發現高雄鳳山溪水變成粉紅色,沿線往上游追溯,發現疑似有工廠偷排廢水,自行使用試劑採樣檢驗COD(化學需氧量)明顯超標,遂立即通報環保局並開直播公開整個偷排過程,環保局隨即查獲一家魷魚食品加工廠,排放廢水水質不佳污染河川,後續將依違反水污法開罰3萬到300萬元。昨深夜近12時,議員李雅靜突開直播表示鳳山溪上游溪水變成粉紅色,直呼「太誇張了,環保局看到了嗎?」,環保局接獲通報隨即派員趕赴現場進行水質採樣,並循線查獲是一家魷魚食品加工廠排放的廢水,讓李雅靜笑稱這不是「魷魚遊戲」,而是「魷魚偷排」,李雅靜認為,鳳山溪整治很長時間,仍然水質不佳,且去年迄今查獲逾80件,可見汙染情況多嚴重,她要求環保局嚴抓重罰偷排。環保局稽查科長蘇皇信表示,該工廠雖有裝設汙染防治設備,但水質處理功能不佳,導致清洗魷魚的粉紅色廢水排入鳳山圳,鳳山溪已劃定為水污染管制區,環保局將視水質檢驗結果後,將依違反水汙染防治法,開罰3萬到300萬元罰鍰。",
      crawler_PicUrl:
        "https://s.yimg.com/uu/api/res/1.2/rLYKPAjzB3ageWwWCRhAJw--~B/aD05MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/ko/nownews.com/9278b8cf5d13b7f431ab8ab12ad0e6d2",
      crawler_Keyword: "李雅靜, 環保局, 鳳山溪",
      crawler_Date: "2021-11-25",
      crawler_Time: "14:45:34",
      crawler_Emo: "負面",
      crawler_EmoWeight: -18,
    },
    {
      crawler_No: 864601,
      crawler_Web: "yahoo",
      crawler_Cate: "",
      crawler_Url:
        "https://tw.news.yahoo.com/%E9%AB%98%E9%9B%84%E8%AD%A6%E7%A0%B4%E5%A4%A7%E5%9E%8B%E7%B6%B2%E8%B7%AF%E7%B0%BD%E8%B3%AD-%E5%9C%96-064423978.html",
      crawler_Title: "高雄警破大型網路簽賭 (圖)",
      crawler_Content:
        "高雄李姓組頭與林姓女股東為鳳山某大樓鄰居,兩人7月起共同經營網路賭博網站,以今彩539與香港六合彩經營網路賭博,經手新台幣9億多下注賭資,李男獲利初估達300萬元,鹽埕警方日前搜索查扣95萬元賭資,25日依賭博罪將2人送辦。(高雄鹽埕警分局提供)中央社記者洪學廣傳真 110年11月25日",
      crawler_PicUrl:
        "https://s.yimg.com/uu/api/res/1.2/wU_Qn_s79Lb0vbLPUdXb9Q--~B/aD01MDI7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/ko/cna.com.tw/81d30132e3c37e6c3ae60e08b0e61095",
      crawler_Keyword: "賭博網站",
      crawler_Date: "2021-11-25",
      crawler_Time: "14:44:23",
      crawler_Emo: "負面",
      crawler_EmoWeight: -3,
    },
  ],
  links: {
    first:
      "https://argus.work/argus/api/v1/data?key=%E9%AB%98%E9%9B%84&start_date=2021-11-25&end_date=2021-11-25&crawler_Web=yahoo&page=1",
    last: "https://argus.work/argus/api/v1/data?key=%E9%AB%98%E9%9B%84&start_date=2021-11-25&end_date=2021-11-25&crawler_Web=yahoo&page=4",
    prev: null,
    next: "https://argus.work/argus/api/v1/data?key=%E9%AB%98%E9%9B%84&start_date=2021-11-25&end_date=2021-11-25&crawler_Web=yahoo&page=2",
  },
};

export default function Cricket() {
  const {
    FetchDate,
    post,
    page,
    ChangeNextPage,
    ChangePrevPage,
    deletArticle,
  } = useHandleArticle();

  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    setArticleData(data.data);
  }, []);

  return (
    <>
      {/* <LoadingBox/> */}
      <MainArea>
        <PageTitle>板球</PageTitle>
        <Rule />
        <ArticleArea>
          {articleData.map((data) => {
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
          // changeNextPage={ChangeNextPage}
          // changePrevPage={ChangePrevPage}
          page={page}
        />
      </MainArea>
    </>
  );
}
