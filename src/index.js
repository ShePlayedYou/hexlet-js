import _ from 'lodash';

const text = () => {
  const a = 'Hello, Hexlet!';
  const b = _.last(['one', 'two']);
  return `${a}\n${b}`;
};

export default text;
