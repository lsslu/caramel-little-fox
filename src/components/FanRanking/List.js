import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 0;
  padding-bottom: ${props => ((100 * props.height) / props.width).toFixed(4)}%;
  position: relative;
`;

const BgImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 3px;
  position: relative;
  margin: 0 10%;
`;

const Column = styled.div`
  width: 33%;
  text-aling: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Avator = styled.div`
  width: ${props => props.height}px;
  height: ${props => props.height}px;
  border-radius: 50%;
  overflow: hidden;
`;

const NickName = styled.div`
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: ${props => props.height}px;
`;

const Contribution = styled.div`
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: ${props => props.height}px;
`;

const List = ({
  bgImg,
  data,
  height
}) => (
  <Container>
    <BgImg src={bgImg} alt="" />
    {
      data.map((item, index) => (
        <ListItem key={`fan_ranking_list_item_${index}`}>
          <Column>
            <Avator height={height}>
              <img src={item.photo} width="100%" alt="" />
            </Avator>
          </Column>
          <Column>
            <NickName height={height}>{item.nickName}</NickName>
          </Column>
          <Column>
            <Contribution height={height}>{item.contribution}</Contribution>
          </Column>
        </ListItem>
      ))
    }
  </Container>
)

export default List;