import React from 'react';
import { classPrefixor } from 'utils/classPrefixor';
import useChangeMeta from 'components/common/hook/useChangeMeta.js';

// Hook

const prefix = 'homepage';
const c = classPrefixor(prefix);

const HomePage = () => {
  useChangeMeta('Cho thuê xe du lịch - xe sang vip pro luxury');
  return (
    <div className={c`wrapper-page`}>
      <section className="content-place">
        <div className="header-content">
          <h1>Tìm xe ngay!</h1>
          <h1>Tìm xe ngay!</h1>
        </div>
        <div className="sky">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sedan-car.svg/1280px-Sedan-car.svg.png" />
          <div className="rode1"></div>
          <div className="rode2"></div>
        </div>{' '}
      </section>
    </div>
  );
};
export default HomePage;
