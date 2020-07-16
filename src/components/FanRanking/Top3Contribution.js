import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: ${props => (100 -  2 * props.marginLr)}%;
  bottom: ${props => props.bottom}%;
  margin: 0 ${props => props.marginLr}%;
`;

const Column = styled.div`
  width: 33%;
`;

const Item = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  background-color: ${props => props.bgColor};
  border: 2px solid ${props => props.borderColor};
  border-radius: 20px;
  display: inline-block;
  padding: 2px 14px;
`;

const Top3Contribution = ({
  one,
  two,
  three,
  marginLr,
  bottom,
  color,
  fontSize,
  bgColor,
  borderColor
}) => {
  const itemProps = {
    color, fontSize, bgColor, borderColor, fontSize
  };
  return (
    <Row marginLr={marginLr} bottom={bottom}>
      <Column>
        <Item {...itemProps}>{three}</Item>
      </Column>
      <Column>
        <Item {...itemProps}>{one}</Item>
      </Column>
      <Column>
        <Item {...itemProps}>{two}</Item>
      </Column>
    </Row>
  );
};

export default Top3Contribution;