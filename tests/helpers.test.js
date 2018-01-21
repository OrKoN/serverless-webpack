'use strict';

const chai = require('chai');
const canBeHandledByWebpack = require('../lib/helpers').canBeHandledByWebpack;
const expect = chai.expect;

describe('helpers', () => {
  describe('canBeHandledByWebpack', () => {
    it('should return true if runtime is nodejs', () => {
      expect(canBeHandledByWebpack({
        runtime: 'nodejs'
      })).to.be.true;
    });
    it('should return true if runtime is undefined', () => {
      expect(canBeHandledByWebpack({})).to.be.true;
    });

    it('should return false if runtime is undefined', () => {
      expect(canBeHandledByWebpack({
        runtime: 'python'
      })).to.be.false;
    });
  });
});