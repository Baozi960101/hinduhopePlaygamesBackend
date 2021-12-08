import React, { useState, Component, useEffect } from "react";
import styled from "styled-components";
import { MainArea, PageTitle } from "../../../global/editArticle";
import useHandleArticle from "../../../global/useHandleArticle";
import { LoadingBox } from "../../../global/Loading";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const data = [
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
];

// 標題、圖片、內容、作者、

export const ArticleArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 30px 40px;
  background-color: #f2f7ff;
`;

const Box = styled.div`
  border: 1px solid black;
  padding: 0 10px 20px 10px;
  margin-bottom: 20px;
`;

const ClassificationSelect = styled.select`
  width: 230px;
  height: 40px;
  font-weight: 600;
  line-height: 40px;
  font-size: 20px;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const ContentButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 40px;
  cursor: pointer;
`;

const myBlockRenderer = (contentBlock) => {
  const type = contentBlock.getType();

  // 图片类型转换为mediaComponent
  if (type === "atomic") {
    return {
      component: Media,
      editable: false,
      props: {
        foo: "bar",
      },
    };
  }
};

const EditTiele = styled.h2``;

const EditTieleInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-size: bold;
`;

class Media extends Component {
  render() {
    const { block, contentState } = this.props;
    const data = contentState.getEntity(block.getEntityAt(0)).getData();
    const emptyHtml = " ";
    return (
      <div>
        {emptyHtml}
        <img
          src={data.src}
          alt={data.alt || ""}
          style={{ height: data.height || "auto", width: data.width || "auto" }}
        />
      </div>
    );
  }
}

const EditorConvertToHTML = ({
  html,
  editorState,
  setEditorState,
  setEditArticleContent,
}) => {
  useEffect(() => {
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [html, setEditorState]);

  function onEditorStateChange(value) {
    setEditorState(value);
  }

  const imageUploadCallBack = (file) =>
    new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      let img = new Image();
      // let url = ''
      reader.onload = function (e) {
        img.src = this.result;
      };
      img.onload = function () {
        // console.log(img.src.length)
        // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");

        // 图片原始尺寸
        var originWidth = this.width;
        var originHeight = this.height;

        // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
        var maxWidth = 400,
          maxHeight = 500;
        // 目标尺寸
        var targetWidth = originWidth,
          targetHeight = originHeight;
        // 图片尺寸超过300x300的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > maxWidth / maxHeight) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        context.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        context.drawImage(img, 0, 0, targetWidth, targetHeight);
        /*第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高*/

        //压缩后的图片转base64 url
        /*canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
         * qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92*/
        var newUrl = canvas.toDataURL("image/jpeg", 0.92); //base64 格式
        // console.log(newUrl.length)

        resolve({
          data: {
            link: newUrl,
          },
        });

        //也可以把压缩后的图片转blob格式用于上传
        // canvas.toBlob((blob)=>{
        //     console.log(blob)
        //     //把blob作为参数传给后端
        // }, 'image/jpeg', 0.92)
      };
    });

  return (
    <div>
      <Box>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
          customBlockRenderFunc={myBlockRenderer}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "image",
              "emoji",
              "colorPicker",
              "fontFamily",
              "textAlign",
              "history",
              "link",
              "list",
            ],
            inline: {
              options: ["bold", "italic", "underline"],
              bold: { className: "demo-option-custom" },
              italic: { className: "demo-option-custom" },
              underline: { className: "demo-option-custom" },
              strikethrough: { className: "demo-option-custom" },
              monospace: { className: "demo-option-custom" },
              superscript: { className: "demo-option-custom" },
              subscript: { className: "demo-option-custom" },
            },
            blockType: {
              className: "demo-option-custom-wide",
              dropdownClassName: "demo-dropdown-custom",
            },
            fontSize: { className: "demo-option-custom-medium" },
            image: {
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true, // 是否显示排列按钮 相当于text-align
              uploadCallback: imageUploadCallBack,
              previewImage: true,
              inputAccept: "image/*",
              alt: { present: false, mandatory: false, previewImage: true },
            },
          }}
        />
        {editorState && (
          <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        )}
      </Box>
    </div>
  );
};

export default function Post() {
  const [editorState, setEditorState] = useState(); // undefined

  const [editArticleContent, setEditArticleContent] = useState("");

  const [articleClassification, setArticleClassification] = useState("");

  const [articleAuthor, setArticleAuthor] = useState("");

  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  useEffect(() => {
    if (editorState === undefined) {
      return;
    }
  }, [editorState]);

  return (
    <>
      {/* <LoadingBox/> */}
      <MainArea>
        <PageTitle>編輯文章</PageTitle>
        <EditTiele>請輸入標題 :</EditTiele>
        <EditTieleInput />
        <EditTiele>請放入圖片 :</EditTiele>
        <input
          accept="image/gif,image/jpeg,image/jpg,image/png"
          type="file"
          onChange={imageChange}
        />
        {selectedImage && (
          <div>
            <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
            <button onClick={removeSelectedImage}>Remove This Image</button>
          </div>
        )}

        <EditTiele>請輸入內文 :</EditTiele>
        <EditorConvertToHTML
          html={editArticleContent}
          editorState={editorState}
          setEditorState={setEditorState}
          setEditArticleContent={setEditArticleContent}
        />

        <ButtonArea>
          <div>
            <EditTiele>請輸入分類 :</EditTiele>
            <ClassificationSelect
              value={articleClassification}
              onChange={(e) => {
                setArticleClassification(e.target.value);
              }}
            >
              <option value="">分類</option>
              <option value="GameInformation">Game Information</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Sports">Sports</option>
            </ClassificationSelect>
          </div>
          <div>
            <EditTiele>請輸入作者 :</EditTiele>
            <ClassificationSelect
              value={articleAuthor}
              onChange={(e) => {
                setArticleAuthor(e.target.value);
              }}
            >
              <option value="">作者</option>
              <option value="使用者01">使用者01</option>
              <option value="使用者02">使用者02</option>
              <option value="使用者03">使用者03</option>
              <option value="使用者04">使用者04</option>
            </ClassificationSelect>
          </div>
        </ButtonArea>
        <ButtonArea style={{ justifyContent: "flex-end", marginTop: "50px" }}>
          <ContentButton
            onClick={() => {
              console.log(
                draftToHtml(convertToRaw(editorState.getCurrentContent()))
              );
            }}
          >
            修改完成
          </ContentButton>
        </ButtonArea>
      </MainArea>
    </>
  );
}
