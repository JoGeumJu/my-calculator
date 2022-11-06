import styled from "@emotion/styled";

export default function About() {
  return (
    <Wrapper>
      <InnerWrap>
        <Title>설명서</Title>
        <Context>내용1</Context>
        <Context>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Context>
        <Horizon />
        <Context>내용2</Context>
        <Context>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Context>
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
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: left;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
`;
const Title = styled.h2`
  display: flex;
  margin: 25px 20px 50px 20px;
  font-size:22px;
`;
const Context = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  padding: 5px 15px;
`;
const Horizon = styled.hr`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  height: 2px;
  width: 100%;
  margin: 10px;
  border: none;
`;
