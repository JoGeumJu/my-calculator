import styled from "@emotion/styled";
import { Slider } from "antd";

export default function Setting() {
  return (
    <Wrapper>
      <InnerWrap>
        <DivFontSize>
          <PFontSize>글씨크기</PFontSize>
          <Slider
            defaultValue={30}
            tooltip={{
              open: true,
            }}
          />
        </DivFontSize>
        <DivFontStyle>
          <PFontStyle>글씨체</PFontStyle>
          <SelFontStyle></SelFontStyle>
        </DivFontStyle>
        <DivTheme>
          <PTheme>테마</PTheme>
          <SelTheme></SelTheme>
        </DivTheme>
      </InnerWrap>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 100px);
  justify-content: center;
  align-items: center;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
// font-size
const DivFontSize = styled.div`
  display: flex;
  flex-direction: column;
`;
const PFontSize = styled.p``;
// font-style
const DivFontStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const PFontStyle = styled.p``;
const SelFontStyle = styled.select``;
// theme
const DivTheme = styled.div`
  display: flex;
  flex-direction: column;
`;
const PTheme = styled.p``;
const SelTheme = styled.select``;
