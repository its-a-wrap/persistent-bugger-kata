import chai from 'chai';
import persistence from './index.js';

const { expect } = chai;

describe('some test', () => {
  it('SHOULD do something', () => {
    expect(persistence(39)).to.be.eql(3);
  });
});
