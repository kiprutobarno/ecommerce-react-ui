import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ height: "24px", fontSize: "12px" })}
`;

const Announcement = () => {
  return <Container>Super Deal! Free shipping for orders above $50</Container>;
};

export default Announcement;
