import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0", fontSize: "14px" })}
`;

const Select = styled.select`
  padding: 4px 15px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Orange</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (Asc)</Option>
            <Option>Prcie (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default ProductList;
