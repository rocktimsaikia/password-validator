expect = require('chai').expect;
var Schema = require('../index');

describe('password-validator',function() {
  var schema;

  describe('has', function() {

    describe('called without params', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.has();
        schema.validate('');
      });

      it('should set positive as true', function() {
        expect(schema.positive).to.be.true;
      });
    });

    describe('called with params', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.has('t{5,}');
        schema.validate('qwerty');
      });

      it('should set positive as true', function() {
        expect(schema.positive).to.be.true;
      });
      it('should apply the param as regex', function() {
        expect(schema.valid).to.be.false;
      })
    });
  });

  describe('not',function() {

    beforeEach(function() {
      schema = new Schema();
      schema.not();
      schema.validate('qwerty');
    });

    it('should set positive as false', function() {
      expect(schema.positive).to.be.false;
    });
  });

  describe('isMin', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.isMin(10);
        schema.validate('qwerty');
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.isMin(10);
        schema.validate('1234567890');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });

  describe('isMax', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.isMax(10);
        schema.validate('1234567890qwerty');
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.isMax(10);
        schema.validate('1234567890');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });

  describe('digits', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.digits();
        schema.validate('qwerty');
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.digits();
        schema.validate('1234567890');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });

  describe('letters', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.letters();
        expect(schema.validate(1234));
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.letters();
        schema.validate('letters');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });

  describe('lowercase', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.lowercase();
        schema.validate('1234CAPS');
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.lowercase();
        schema.validate('lettersCAPS');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });

  describe('uppercase', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.uppercase();
        schema.validate('1234lower');
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.uppercase();
        schema.validate('lettersCAPS');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });

  describe('symbols', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.symbols();
        schema.validate('1234lower');
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.symbols();
        schema.validate('letters&CAPS');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });

  describe('space', function() {

    describe('the password fails the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.spaces();
        schema.validate('1234lower');
      });

      it('should return false on validation', function() {
        expect(schema.valid).to.be.false;
      });
    });

    describe('the password clears the valdiation', function() {

      beforeEach(function() {
        schema = new Schema();
        schema.spaces();
        schema.validate('letters &CAPS');
      });

      it('should return true on validation', function() {
        expect(schema.valid).to.be.true;
      });
    });
  });
});