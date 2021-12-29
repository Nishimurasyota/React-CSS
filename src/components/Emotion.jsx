/***@jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

//オブジェクトで記述する方法s
export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: antiquewhite;
  `;

  //インラインスタイルで記述する方法
  const TitleStyle = css({
    margin: "0",
    color: "green"
  });

  return (
    <div css={containerStyle}>
      <p css={TitleStyle}>- Emotion -</p>
      <ButtonStyle>FIGTH!!</ButtonStyle>
    </div>
  );
};
//コンポーネントで記述する方法
const ButtonStyle = styled.button`
  background-color: skyblue;
`;
