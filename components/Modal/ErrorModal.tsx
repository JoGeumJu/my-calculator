import ReactModal from "react-modal";

import styled from "@emotion/styled";

interface Props {
  isOpenModal: boolean;
  context?: string;
}

export default function ErrorModal(props: Props) {
  return (
    <ReactModal
      isOpen={true}
      style={{
        overlay: {
          position: "absolute",
          width: "0",
          height: "0",
        },
        content: {
          position: "absolute",
          top: "30px",
          left: "20px",
          width: "280px",
          height: "32px",
          margin: "0",
          padding: "0",
          backgroundColor: "rgb(202, 24, 24)",
          borderRadius: "12px",
          boxShadow: "3px 3px 3px #999999",
          border: "none",
          fontSize: "15px",
          color: "#fff",
          transform: `${
            props.isOpenModal ? "translate(0px,0px)" : "translate(-310px,0)"
          }`,
          transition: "0.7s ease",
        },
      }}
    >
      <Wrapper>
        <IconCaution src="/images/modal/caution.png" />
        <Context>{props.context}</Context>
      </Wrapper>
    </ReactModal>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
`;
const Context = styled.p`
  font-size: 15px;
`;
const IconCaution = styled.img`
  width: 26px;
  margin-right: 3px;
`;
