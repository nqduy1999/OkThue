import React from 'react';
import { classPrefixor } from 'utils/classPrefixor';
import { images } from 'utils/images';

const prefix = 'footer';
const c = classPrefixor(prefix);
const index = () => {
  return (
    <section className={c`wrapper-page`}>
      <ul className="rule-footer">
        <li>Điều khoản chính sách </li>
        <li>Chính sách bảo mật </li>
      </ul>
      <div className="content-footer">©OkThue</div>
      <div className="icon-download">
        <img src={images.icon_appstore_footer} />
        <img src={images.icon_googleplay_footer} />
      </div>
    </section>
  );
};

export default index;
