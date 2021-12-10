import React, { useState, Component, useEffect } from "react";
import styled from "styled-components";
import { MainArea, PageTitle } from "../../../global/editArticle";
import { LoadingBox } from "../../../global/Loading";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { addArticleApi } from "../../../global/API";

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
  height: 400px;
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

const EditTitle = styled.h2``;

const EditTitleInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 24px;
  font-size: bold;
`;

const PreviewImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 500px;
  height: 350px;
  border: 1px solid black;
  box-sizing: border-box;
  margin: 30px 0;
`;

const PreviewImg = styled.img`
  width: 100%;
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

const EditorConvertToHTML = ({ html, editorState, setEditorState }) => {
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
    </Box>
  );
};

export default function Post() {
  const [articleTitle, setArticleTitle] = useState("");

  const [editorState, setEditorState] = useState(); // undefined

  // eslint-disable-next-line no-unused-vars
  const [editArticleContent, setEditArticleContent] = useState("");

  const [articleClassification, setArticleClassification] = useState("");

  const [articleAuthor, setArticleAuthor] = useState("");

  const [selectedImage, setSelectedImage] = useState();

  const [baes64Code, setBaes64Code] = useState("");

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      var file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        let image = e.target.result;
        setBaes64Code(image);
        console.log(image);
      };
      reader.readAsDataURL(file);
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

  useEffect(() => {
    window.onbeforeunload = function (e) {
      (e || window.event).returnValue = "";
    };
    //防止網頁刷新
  }, []);

  return (
    <>
      {/* <LoadingBox/> */}
      <MainArea>
        <PageTitle>編輯文章</PageTitle>
        <ButtonArea>
          <div>
            <EditTitle>分類 :</EditTitle>
            <ClassificationSelect
              value={articleClassification}
              onChange={(e) => {
                setArticleClassification(e.target.value);
              }}
            >
              <option value="">請選擇分類</option>
              <option value="GameInformation">Game Information</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Sports">Sports</option>
            </ClassificationSelect>
          </div>
          <div>
            <EditTitle>作者 :</EditTitle>
            <ClassificationSelect
              value={articleAuthor}
              onChange={(e) => {
                setArticleAuthor(e.target.value);
              }}
            >
              <option value="">請選擇作者</option>
              <option value="使用者01">使用者01</option>
              <option value="使用者02">使用者02</option>
              <option value="使用者03">使用者03</option>
              <option value="使用者04">使用者04</option>
            </ClassificationSelect>
          </div>
        </ButtonArea>
        <EditTitle>標題 :</EditTitle>
        <EditTitleInput
          placeholder="請輸入"
          value={articleTitle}
          type="text"
          onChange={(e) => {
            setArticleTitle(e.target.value);
          }}
        />
        <EditTitle>封面 :</EditTitle>
        <input
          accept="image/gif,image/jpeg,image/jpg,image/png"
          type="file"
          onChange={imageChange}
        />
        {selectedImage && (
          <>
            <PreviewImgArea>
              <PreviewImg
                src={
                  selectedImage === undefined
                    ? baes64Code
                    : URL.createObjectURL(selectedImage)
                }
                alt=""
              />
            </PreviewImgArea>
            <button onClick={removeSelectedImage}>刪除該照片</button>
          </>
        )}
        {/* <PreviewImg src={baes64Code} alt="Thumb" /> */}
        <EditTitle>內文 :</EditTitle>
        <EditorConvertToHTML
          html={editArticleContent}
          editorState={editorState}
          setEditorState={setEditorState}
        />

        <ButtonArea style={{ justifyContent: "flex-end", marginTop: "50px" }}>
          <ContentButton
            onClick={() => {
              addArticleApi(
                articleTitle,
                baes64Code,
                draftToHtml(convertToRaw(editorState.getCurrentContent())),
                articleClassification,
                articleAuthor
              );
              console.log(
                "標題",
                articleTitle,
                "封面",
                selectedImage,
                "內文",
                draftToHtml(convertToRaw(editorState.getCurrentContent())),
                "分類",
                articleClassification,
                "作者",
                articleAuthor
                // 新增 formData
                // const formData = new FormData();
                // formData.append('image', e.target.files[0]);
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
