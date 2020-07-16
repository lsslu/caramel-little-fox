import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  display: flex;
  width: ${props => props.width}%;
  flex-direction: column;
  align-items: center;
`;

const Avator = styled.div`
  border-radius: 50%;
  width: 70%;
  height: 70%;
  overflow: hidden;
`;

const NickName = styled.div`
  color: ${props => props.color};
  text-align: center;
  font-size: 12px;
  margin-top: 12px;
`;

const TopAvator = ({
  photo,
  nickName,
  left,
  top,
  width,
  color
}) => (
  <Container left={left} top={top} width={width}>
    <Avator>
      <img src={photo} width="100%" alt="" />
    </Avator>
    <NickName color={color}>{nickName}</NickName>
  </Container>
)

export default TopAvator;