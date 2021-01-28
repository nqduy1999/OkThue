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
        <h1>Ở bất cứ đâu</h1>
      </section>
    </div>
  );
};
export default HomePage;
