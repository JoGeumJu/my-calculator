import { RiDeleteBack2Fill } from "react-icons/ri";
import { FcCalculator, FcSettings } from "react-icons/fc";
import { GrStatusInfoSmall } from "react-icons/gr";
import { TbNotes } from "react-icons/tb";
import { TiPin } from "react-icons/ti";
import styled from "@emotion/styled";

export default function About() {
  return (
    <Wrapper>
      <IconClip src="/images/about/clip.png" />
      <InnerWrap>
        <Title>
          <HightLight1>'나의 계산기, my calculator'&nbsp;</HightLight1>사용방법
        </Title>
        <SubTitle>
          <IconCal />
          계산기
        </SubTitle>
        <ContextWrapper>
          <ContextWrap1>
            <ContextBox>
              <IconSquare />
              <Context>
                <IconDel></IconDel>
              </Context>
              <SubContext>끝의 숫자ㆍ문자 지우기</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>
                <IconMemo />
              </Context>
              <SubContext>
                저장된 값이 없다면 계산한 값을 저장, 저장된 값이 있다면 저장된
                값 불러오기
              </SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>C</Context>
              <SubContext>모든 식 지우기</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>=</Context>
              <SubContext>식 계산</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>±</Context>
              <SubContext>음ㆍ양 부호화</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>1/x</Context>
              <SubContext>분수화</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>x²</Context>
              <SubContext>제곱</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>√</Context>
              <SubContext>루트</SubContext>
            </ContextBox>
          </ContextWrap1>
          <ContextWrap2>
            <ContextBox>
              <IconSquare />
              <Context>%</Context>
              <SubContext>나눗셈(나머지)</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>/</Context>
              <SubContext>나눗셈(몫, 나머지)</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>X</Context>
              <SubContext>곱셈</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>-</Context>
              <SubContext>뺄셈</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>+</Context>
              <SubContext>덧셈</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>0</Context>
              <SubContext>값에 10을 곱셈</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>00</Context>
              <SubContext>값에 100을 곱셈</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>.</Context>
              <SubContext>소숫점</SubContext>
            </ContextBox>
          </ContextWrap2>
        </ContextWrapper>
        <Horizon />
        <SubTitle>
          <IconSetting />
          설정
        </SubTitle>
        <ContextBox>
          <Context>1. 글씨크기</Context>
          <ContextExplain>
            <SubContext>
              글씨크기 설정 (※계산기의 버튼의 글씨크기는 바뀌지 않아요)
            </SubContext>
            <ImgEx src="/images/about/exFontSize.png" />
            <ContextTip>
              <IconTip />
              슬라이더를 이용해서 글씨크기를 바꿀 수 있어요
            </ContextTip>
            <ContextTip>
              <IconTip />양 옆의 버튼을 이용해서 글씨크기를 바꿀 수 있어요
            </ContextTip>
            <ContextTip>
              <IconTip />
              슬라이더나 버튼에 마우스를 올리면 글씨크기를 볼 수 있는 태그가
              생겨요
            </ContextTip>
            <ContextTip>
              <IconTip />
              지금 선택한 글씨크기는 'Aa'에서 볼 수 있어요
            </ContextTip>
          </ContextExplain>
        </ContextBox>
        <ContextBox>
          <Context>2. 글씨체</Context>
          <ContextExplain>
            <SubContext>글씨체 설정</SubContext>
            <ImgEx
              src="/images/about/exFontStyle.png"
              style={{ width: "40%" }}
            />
            <ContextTip>
              <IconTip />
              아래의 상자를 눌러 바꿀 수 있는 글씨체들을 볼 수 있어요
            </ContextTip>
            <ContextTip>
              <IconTip />
              글씨체들 중 원하는 것을 눌러 바꿀 수 있어요
            </ContextTip>
            <ContextTip>
              <IconTip />
              지금 선택한 글씨체는 '가나다라'에서 볼 수 있어요
            </ContextTip>
          </ContextExplain>
        </ContextBox>
        <ContextBox>
          <Context>3. 테마</Context>
          <ContextExplain>
            <SubContext>테마 설정</SubContext>
            <ContextTip>
              <IconTip />
              슬라이드를 넘기며 바꿀 수 있는 테마들을 볼 수 있어요
            </ContextTip>
            <ContextTip>
              <IconTip />양 옆의 버튼을 눌러 슬라이드를 넘길 수 있어요
            </ContextTip>
            <ContextTip>
              <IconTip />
              각각의 슬라이드에는 배경테마를 정할 수 있는 버튼들이 있어요
            </ContextTip>
            <ContextTip>
              <IconTip />
              원하는 테마의 슬라이드에서 원하는 배경테마까지 골라주세요
            </ContextTip>
            <ContextTip>
              <IconTip />
              테마의 색은 계산기의 색이 돼요
            </ContextTip>
            <ContextTip>
              <ImgEx
                src="/images/about/exTheme.png"
                style={{
                  position: "static",
                  width: "65%",
                  transform: "translate(0,0)",
                }}
              />
            </ContextTip>
          </ContextExplain>
        </ContextBox>
      </InnerWrap>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const IconClip = styled.img`
  z-index: 150;
  width: 40px;
  position: absolute;
  top: 10%;
  right: 10%;
  transform: translate(-35px, -23px);
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: left;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 11px;
    background-color: rgba(0, 0, 0, 0);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  &::-webkit-scrollbar-button {
    background-color: rgba(0, 0, 0, 0);
    height: 11px;
  }
`;
const Title = styled.h2`
  display: flex;
  margin: 35px 20px 60px 20px;
  font-size: 22px;
  color: #313131;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const SubTitle = styled.h2`
  display: flex;
  width: 100%;
  padding: 12px 40px;
  font-size: 18px;
  color: #313131;
  text-align: left;
  align-items: center;
  vertical-align: center;
  @media only screen and (max-width: 1024px) {
    padding: 12px 30px;
    font-size: 16px;
  }
  @media only screen and (max-width: 767px) {
    padding: 12px 20px;
  }
`;
const ContextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 7px 0 7px 55px;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    padding: 7px 0 7px 45px;
  }
  @media only screen and (max-width: 767px) {
    padding: 7px 0 7px 35px;
  }
`;
const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
`;
const ContextWrap1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ContextWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ContextExplain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ContextTip = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7px 0 0 0;
  color: #666666;
  font-size: 16px;
  letter-spacing: -1px;
  @media only screen and (max-width: 1024px) {
    font-size: 13px;
    letter-spacing: -1.3px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const Context = styled.span`
  display: flex;
  font-size: 16px;
  color: #313131;
  margin: 0 7px auto 0;
  white-space: nowrap;
  @media only screen and (max-width: 1024px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const SubContext = styled.span`
  display: flex;
  width: 100%;
  font-size: 16px;
  color: #979797;
  letter-spacing: -1px;
  @media only screen and (max-width: 1024px) {
    font-size: 13px;
    letter-spacing: -1.3px;
  }
  @media only screen and (max-width: 767px) {
  }
`;
const Horizon = styled.hr`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  height: 2px;
  width: 100%;
  margin: 20px;
  border: none;
`;
const ImgEx = styled.img`
  display: flex;
  position: absolute;
  top: 5px;
  right: -10px;
  transform: translate(100%, 0px);
  border-radius: 13px;
  width: 30%;
  box-shadow: 3px 3px 2px #999999;
  @media only screen and (max-width: 1024px) {
    right: -5px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const IconSquare = styled(GrStatusInfoSmall)`
  height: 6px;
  margin: auto 0;
  margin-right: 3px;
  color: #979797;
`;
const IconTip = styled(TiPin)`
  height: 40%;
  margin: auto 0;
  margin-right: 3px;
  color: rgb(255, 82, 82);
`;
const IconCal = styled(FcCalculator)`
  height: 100%;
  margin-right: 3px;
`;
const IconSetting = styled(FcSettings)`
  height: 100%;
  margin-right: 3px;
`;
const IconDel = styled(RiDeleteBack2Fill)`
  height: 100%;
`;
const IconMemo = styled(TbNotes)`
  height: 100%;
`;
const HightLight1 = styled.p`
  color: rgb(156, 204, 101);
`;
