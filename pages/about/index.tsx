import { FcCalculator, FcSettings } from "react-icons/fc";
import { GrStatusInfoSmall } from "react-icons/gr";
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
        <ContextBox>
          <IconSquare />
          <Context>back&nbsp;&nbsp;</Context>
          <SubContext>설명</SubContext>
        </ContextBox>
        <Context>
          <IconSquare />
          CE
        </Context>
        <Context>
          <IconSquare />C
        </Context>
        <Context>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Context>
        <Horizon />
        <SubTitle>
          <IconSetting />
          설정
        </SubTitle>
        <Context>내용2</Context>
        <Context>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Context>
        <Context>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Context>
        <Context>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Context>
      </InnerWrap>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: calc(100% - 100px);
  justify-content: center;
  align-items: center;
`;
const IconClip = styled.img`
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
`;
const Title = styled.h2`
  display: flex;
  margin: 25px 20px 30px 20px;
  font-size: 22px;
  color: #313131;
`;
const SubTitle = styled.h2`
  display: flex;
  width: 100%;
  padding: 7px 15px;
  font-size: 18px;
  color: #313131;
  text-align: left;
  align-items: center;
  vertical-align: center;
`;
const ContextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px 20px;
  justify-content: flex-start;
  align-items: center;
`;
const Context = styled.span`
  display: flex;
  font-size: 16px;
  color: #313131;
`;
const SubContext = styled.span`
  display: flex;
  width: 100%;
  font-size: 16px;
  color: #979797;
`;
const Horizon = styled.hr`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  height: 2px;
  width: 100%;
  margin: 10px;
  border: none;
`;
const IconCal = styled(FcCalculator)`
  height: 100%;
  margin-right: 3px;
`;
const IconSetting = styled(FcSettings)`
  height: 100%;
  margin-right: 3px;
`;
const IconSquare = styled(GrStatusInfoSmall)`
  height: 40%;
  margin-right: 3px;
  margin: auto 0;
`;
const HightLight1 = styled.p`
  color: rgb(156, 204, 101);
`;
