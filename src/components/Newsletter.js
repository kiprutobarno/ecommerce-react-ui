import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "40vh" })}
`;

const Title = styled.h1`
  font-size: 72px;
  margin: 20px;
  ${mobile({ fontSize: "48px", margin: "10px" })}
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px lightgrey solid;
  ${mobile({ width: "5%", justifyContent: "center", height: "30px" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 24px;
  ${mobile({ paddingLeft: "5px" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates on your favorite Product!</Desc>
      <InputContainer>
        <Input placeholder="Email Address" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
