'use strict'

const type = require('../index')
const expect = require('chai').expect

describe('Module', () => {
  describe('"isBoolean"', () => {
    it('should export a function', () => {
      expect(type.isBoolean).to.be.a('function');
    });

    it('should return true if a given value is a boolean', () => {
        expect(type.isBoolean(true)).to.be.true;
    });

    it('should return true if a given value is a boolean', () => {
        expect(type.isBoolean(false)).to.be.true;
    });
  })
})