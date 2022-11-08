import { RiDeleteBack2Fill } from "react-icons/ri";
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
              <Context>CE</Context>
              <SubContext>현재 계산중인 식 지우기</SubContext>
            </ContextBox>
            <ContextBox>
              <IconSquare />
              <Context>C</Context>
              <SubContext>
                이전에 계산했던 모든 식 포함하여 지우기
              </SubContext>
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
const ContextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const ContextWrap1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const ContextWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Context = styled.span`
  display: flex;
  font-size: 16px;
  color: #313131;
  margin-right: 7px;
`;
const SubContext = styled.span`
  display: flex;
  width: 100%;
  font-size: 16px;
  color: #979797;
  letter-spacing: -0.6px;
`;
const Horizon = styled.hr`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  height: 2px;
  width: 100%;
  margin: 10px;
  border: none;
`;
const IconSquare = styled(GrStatusInfoSmall)`
  height: 40%;
  margin: auto 0;
  margin-right: 3px;
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
const HightLight1 = styled.p`
  color: rgb(156, 204, 101);
`;
