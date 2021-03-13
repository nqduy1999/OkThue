import React, { useEffect, useState } from 'react';
import { Upload, message, Spin } from 'antd';
import { UploadImg } from '../../services/upload';
import PropTypes from 'prop-types';
// styles
import StyledUploadAvatar from './styled';
// variables
import { HOST_IMAGE } from '../../variables/host';
// images
import { images } from '../../variables/images';

function UploadAvatar(props) {
  const { imageUrl, setImageUrl, setThumnail } = props;
  // state
  const [loading, setLoading] = useState(false);
  const [imgAvatar, setImgAvatar] = useState('');
  // Function
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  async function customRequest({ file }) {
    const formData = new FormData();
    formData.append('file', file);
    const res = await UploadImg(formData);
    setLoading(false);
    if (res) {
      setThumnail(res.name);
      getBase64(file, imageUrl => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    } else {
      message.error(
        res.message ? res.message : 'Đã có lỗi xảy ra vui lòng thử lại sau'
      );
    }
  }

  useEffect(() => {
    setImgAvatar(localStorage.getItem('avatar'));
  }, []);

  return (
    <StyledUploadAvatar>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        accept={'.jpg, .jpeg, .png'}
        customRequest={customRequest}
      >
        {loading ? (
          <Spin spinning={loading} size="small" />
        ) : imageUrl !== '' &&
          imageUrl != `${HOST_IMAGE}/null` &&
          imageUrl != HOST_IMAGE &&
          imageUrl != `${`${HOST_IMAGE}/`}` ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{ width: '100%' }}
            className="image"
          />
        ) : (
          <img
            src={imgAvatar ? imgAvatar : images.icon_profile}
            alt="avatar"
            style={{ width: '100%' }}
            className="image"
          />
        )}
      </Upload>
    </StyledUploadAvatar>
  );
}
UploadAvatar.propTypes = {
  imageUrl: PropTypes.any,
  setImageUrl: PropTypes.any,
  setThumnail: PropTypes.any,
  isShowName: PropTypes.boolean
};

export default UploadAvatar;
