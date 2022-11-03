import styled from "@emotion/styled";

export default function About() {
  return <Wrapper><InnerWrap>어바웃이얌~!</InnerWrap></Wrapper>;
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
  width: auto;
  height: 100%;
  align-items: center;
`;