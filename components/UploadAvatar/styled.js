import styled from 'styled-components';
// import variableStyles from "../../styles/variable-styles";

const StyledUploadAvatar = styled.div`
  .ant-upload-picture-card-wrapper {
    width: 64px;
    height: 64px;
    .ant-upload-select {
      border-radius: 40px;
      width: 64px;
      height: 64px;
      .ant-upload {
        img {
          width: 64px;
          height: 64px;
          border-radius: 40px;
        }
      }
    }
    .ant-upload-children {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default StyledUploadAvatar;
