import React from 'react';
import ButtonClear from '../ButtonClear/index';
import ButtonSubmit from '../ButtonSubmit/index';
import '../../styles.scss';

const Form = () => (
  <form
    method="post"
    action="#"
  >
    <ButtonSubmit />
    <ButtonClear />
  </form>
);

export default Form;
