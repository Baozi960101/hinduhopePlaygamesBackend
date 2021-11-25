import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100vh;
  background-color: #f7f8fa;
  top: 0;
  left: 0;

  ${(props) => props.$close && `padding-left:90px;`}
`;

const LoadingTitle = styled.div`
  display: flex;
  color: #70a7ff;
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
  letter-spacing: 0.5px;
`;

export function LoadingBox() {
  return (
    <>
      <Loading>
        <Loader type="Audio" color="#70A7FF" height={80} width={80} />
        <LoadingTitle>
          Loading
          <Loader type="ThreeDots" color="#70A7FF" height={10} width={50} />
        </LoadingTitle>
      </Loading>
    </>
  );
}
