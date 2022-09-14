import styled from "styled-components";

const StylesWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  .title {
    text-align: center;
    margin-bottom: 35px;
  }
  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  .column {
    padding: 15px;
  }
  .filter {
    margin-bottom: 15px;
    padding: 10px 15px;
  }
`

export default StylesWrap;