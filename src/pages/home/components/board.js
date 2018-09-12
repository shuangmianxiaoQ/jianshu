import React from 'react';
import { connect } from 'react-redux';
import { BoardWrapper, BoardItem } from '../style';

const Board = ({ boardList }) => (
  <BoardWrapper>
    {boardList.map(item => (
      <BoardItem
        key={item.get('id')}
        imgUrl={item.get('imgUrl')}
        imgId={item.get('id')}
      />
    ))}
  </BoardWrapper>
);

const mapStateToProps = state => ({
  boardList: state.getIn(['home', 'boardList'])
});

export default connect(
  mapStateToProps,
  null
)(Board);
