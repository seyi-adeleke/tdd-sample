'use strict'

const type = require('../index')
const expect = require('chai').expect

describe('Module', () => {
  describe('"isBoolean"', () => {
    it('should export a function', () => {
      expect(type.isBoolean).to.be.a('function')
    })
  })
})