import React from 'react';
import styled from 'styled-components';
import TopAvator from './TopAvator';
import Top3Contribution from './Top3Contribution';
import List from './List';
const img_header = require('../../assets/header.png')
const img_list = require('../../assets/list.png')

const avator_url = 'http://imagev2.xmcdn.com/group44/M02/17/61/wKgKjFsDpFHBXidxAAAdrswxrr836.jpeg!op_type=5&upload_type=header&device_type=ios&name=large';

const Top3 = styled.div`
  height: 0;
  padding-bottom: ${props => ((100 * props.height) / props.width).toFixed(4)}%;
  position: relative;
`;

const ImgHeader = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ListItem = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 3px;
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

const data = [
  {
    photo: avator_url,
    nickName: 'lss',
    contribution: 1234
  },
  {
    photo: avator_url,
    nickName: 'sandy',
    contribution: 7777
  },
  {
    photo: avator_url,
    nickName: 'miku',
    contribution: 636
  },
  {
    photo: avator_url,
    nickName: 'miku',
    contribution: 636
  },
  {
    photo: avator_url,
    nickName: 'miku',
    contribution: 636
  },
  {
    photo: avator_url,
    nickName: 'miku',
    contribution: 636
  },
  {
    photo: avator_url,
    nickName: 'miku',
    contribution: 636
  },
]

const FanRanking = () => {
  const bgHeight = 198.81;
  const height = bgHeight / 7 - 6;
  return (
    <>
      <Top3 width={375} height={318.5}>
        <ImgHeader src={img_header} />
        <TopAvator
          photo={avator_url}
          nickName={'lss'}
          left={40}
          top={34}
          width={20}
          color="#fff"
        />
        <TopAvator
          photo={avator_url}
          nickName={'sandy'}
          left={14}
          top={43}
          width={20}
          color="#fff"
        />
        <TopAvator
          photo={avator_url}
          nickName={'mahoro'}
          left={67}
          top={39}
          width={20}
          color="#fff"
        />
        <Top3Contribution
          bottom={14}
          marginLr={8}
          color="#fff"
          bgColor="#000"
          borderColor="#D29175"
          one={10000}
          two={9999}
          three={8888}
          fontSize={12}
        />
      </Top3>
      <List
        bgImg={img_list}
        data={data}
        height={height}
      />
    </>
  )
}

export default FanRanking;