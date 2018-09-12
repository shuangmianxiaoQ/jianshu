import React from 'react';
import { connect } from 'react-redux';
import {
  DownloadWrapper,
  DownloadInfo,
  DownloadTitle,
  DownloadDescription,
  DownloadPopover,
  PopoverArrow,
  PopoverContent
} from '../style';
import { actionCreators } from '../store';

const Download = ({ isShowQRCode, handleMouseEnter, handleMouseLeave }) => (
  <DownloadWrapper
    onMouseEnter={() => handleMouseEnter(isShowQRCode)}
    onMouseLeave={() => handleMouseLeave(isShowQRCode)}
  >
    <img src="statics/download/download.png" alt="download" />
    <DownloadInfo>
      <DownloadTitle>
        下载简书手机App
        <svg className="icon icon-right" aria-hidden="true">
          <use xlinkHref="#icon-right" />
        </svg>
      </DownloadTitle>
      <DownloadDescription>随时随地发现和创作内容</DownloadDescription>
    </DownloadInfo>
    {isShowQRCode ? (
      <DownloadPopover>
        <PopoverArrow />
        <PopoverContent>
          <img src="statics/download/download.png" alt="download" />
        </PopoverContent>
      </DownloadPopover>
    ) : null}
  </DownloadWrapper>
);

const mapStateToProps = state => ({
  isShowQRCode: state.getIn(['home', 'isShowQRCode'])
});

const mapDispatchToProps = dispatch => ({
  handleMouseEnter: isShow =>
    dispatch(actionCreators.changeShowQRCodeStatus(isShow)),
  handleMouseLeave: isShow =>
    dispatch(actionCreators.changeShowQRCodeStatus(isShow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
