import React from 'react';
import { classPrefixor } from 'utils/classPrefixor';

const prefix = 'footer';
const c = classPrefixor(prefix);
const index = () => {
  return (
    <section className={c`wrapper-page`}>
      <div>Footer</div>
    </section>
  );
};

export default index;
