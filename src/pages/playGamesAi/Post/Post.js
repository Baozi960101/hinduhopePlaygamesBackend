import React, { useState, Component } from "react";
import styled from "styled-components";
import { MainArea, PageTitle } from "../../../global/editArticle";
import useHandleArticle from "../../../global/useHandleArticle";
import { LoadingBox } from "../../../global/Loading";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

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

export default function Post() {
  const [editArticleContent, setEditArticleContent] = useState("");

  const [articleClassification, setArticleClassification] = useState("");

  const [articleAuthor, setArticleAuthor] = useState("");

  function judgeArticle(editorState) {
    if (articleClassification === "" || articleAuthor === "") {
      alert("作者跟分類請填完整");
      return;
    }
    console.log(
      draftToHtml(convertToRaw(editorState.getCurrentContent())),
      articleClassification,
      articleAuthor
    );
    setEditArticleContent(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  }

  class EditorConvertToHTML extends Component {
    constructor(props) {
      super(props);
      const html = editArticleContent;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const editorState = EditorState.createWithContent(contentState);
        this.state = {
          editorState,
        };
      }
    }

    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
    };

    imageUploadCallBack = (file) =>
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
              targetHeight = Math.round(
                maxWidth * (originHeight / originWidth)
              );
            } else {
              targetHeight = maxHeight;
              targetWidth = Math.round(
                maxHeight * (originWidth / originHeight)
              );
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

    render() {
      const { editorState } = this.state;

      return (
        <div>
          <ButtonArea>
            <ClassificationSelect
              value={articleClassification}
              onChange={(e) => {
                setEditArticleContent(
                  draftToHtml(convertToRaw(editorState.getCurrentContent()))
                );
                setArticleClassification(e.target.value);
              }}
            >
              <option value="">分類</option>
              <option value="GameInformation">Game Information</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Sports">Sports</option>
            </ClassificationSelect>
            <ClassificationSelect
              value={articleAuthor}
              onChange={(e) => {
                setEditArticleContent(
                  draftToHtml(convertToRaw(editorState.getCurrentContent()))
                );
                setArticleAuthor(e.target.value);
              }}
            >
              <option value="">作者</option>
              <option value="使用者01">使用者01</option>
              <option value="使用者02">使用者02</option>
              <option value="使用者03">使用者03</option>
              <option value="使用者04">使用者04</option>
            </ClassificationSelect>
          </ButtonArea>
          <Box>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
              customBlockRenderFunc={myBlockRenderer}
              toolbar={{
                options: [
                  "inline",
                  "blockType",
                  "fontSize",
                  "textAlign",
                  "history",
                  "colorPicker",
                  "image",
                  "link",
                ],
                inline: {
                  options: ["italic"],
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
                  uploadCallback: this.imageUploadCallBack,
                  previewImage: true,
                  inputAccept: "image/*",
                  alt: { present: false, mandatory: false, previewImage: true },
                },
              }}
            />
          </Box>
          <ButtonArea style={{ justifyContent: "flex-end" }}>
            <ContentButton
              onClick={() => {
                judgeArticle(editorState);
              }}
            >
              修改完成
            </ContentButton>
          </ButtonArea>
        </div>
      );
    }
  }

  return (
    <>
      {/* <LoadingBox/> */}
      <MainArea>
        <PageTitle>編輯文章</PageTitle>
        <EditorConvertToHTML />
      </MainArea>
    </>
  );
}
