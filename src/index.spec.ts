import 'mocha';
import {expect} from 'chai';
import './index';

describe('String extension functions', () => {
    before(() => {
    });
    describe('"123".toInt', () => {
        it('should be number', () => {
            expect('123'.toInt()).to.be.a('number');
        });
        it('should be 123', () => {
            expect('123'.toInt()).to.be.equal(123);
        });
    });
    describe('"123.456".toFloat', () => {
        it('should be number', () => {
            expect('123.456'.toFloat()).to.be.a('number');
        });
        it('should be 123.456', () => {
            expect('123.456'.toFloat()).to.be.equal(123.456);
        });
    });
    describe('"aaa".ucFirst', () => {
        it('should be string', () => {
            expect('aaa'.ucFirst()).to.be.a('string');
        });
        it('should be "Aaa"', () => {
            expect('aaa'.ucFirst()).to.be.equal('Aaa');
        });
    });
    describe('"hello world!".ucWords', () => {
        it('should be string', () => {
            expect('aaa'.ucWords()).to.be.a('string');
        });
        it('should be "Hello World!"', () => {
            expect('hello world!'.ucWords()).to.be.equal('Hello World!');
        });
    });
    describe('"AAA".lcFirst', () => {
        it('should be string', () => {
            expect('AAA'.lcFirst()).to.be.a('string');
        });
        it('should be "aAA"', () => {
            expect('AAA'.lcFirst()).to.be.equal('aAA');
        });
    });
    describe('"aaa_bbb_ccc".toCamel', () => {
        it('should be string', () => {
            expect('aaa_bbb_ccc'.toCamel()).to.be.a('string');
        });
        it('should be "aaaBbbCcc"', () => {
            expect('aaa_bbb_ccc'.toCamel()).to.be.equal('aaaBbbCcc');
        });
    });
    describe('"aaa bbb ccc".toCamel', () => {
        it('should be string', () => {
            expect('aaa bbb ccc'.toCamel()).to.be.a('string');
        });
        it('should be "aaaBbbCcc"', () => {
            expect('aaa bbb ccc'.toCamel()).to.be.equal('aaaBbbCcc');
        });
    });
    describe('"aaaBbbCcc".toSnake', () => {
        it('should be string', () => {
            expect('aaaBbbCcc'.toSnake()).to.be.a('string');
        });
        it('should be "aaa_bbb_ccc"', () => {
            expect('aaaBbbCcc'.toSnake()).to.be.equal('aaa_bbb_ccc');
        });
        it('should be "aaa bbb ccc"', () => {
            expect('aaa bbb ccc'.toSnake()).to.be.equal('aaa_bbb_ccc');
        });
    });
    describe('"aaa_bbb_ccc".toPascal', () => {
        it('should be string', () => {
            expect('aaa_bbb_ccc'.toPascal()).to.be.a('string');
        });
        it('should be "aaaBbbCcc"', () => {
            expect('aaa_bbb_ccc'.toPascal()).to.be.equal('AaaBbbCcc');
        });
    });
});
