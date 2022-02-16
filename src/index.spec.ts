import 'mocha';
import {expect} from 'chai';
import './index';

describe('String extension functions', () => {
    before(() => {
    });
    describe('.toInt', () => {
        const testList = {
            123: 123,
            '123ddd': 123,
            123.456: 123
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert "${src}" to ${dst}`, () => {
                expect(src.toInt()).to.be.a('number');
                expect(src.toInt()).to.be.equal(dst);
            })
        );
    });
    describe('.toFloat', () => {
        const testList = {
            123.456: 123.456,
            '123.456aaa': 123.456
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert "${src}" to ${dst}`, () => {
                expect(src.toFloat()).to.be.a('number');
                expect(src.toFloat()).to.be.equal(dst);
            })
        );
    });
    describe('.ucFirst', () => {
        it('should be string', () => {
            expect('aaa'.ucFirst()).to.be.a('string');
        });
        it('should be "Aaa"', () => {
            expect('aaa'.ucFirst()).to.be.equal('Aaa');
        });
    });
    describe('.ucWords', () => {
        it('should be string', () => {
            expect('aaa'.ucWords()).to.be.a('string');
        });
        it('should be "Hello World!"', () => {
            expect('hello world!'.ucWords()).to.be.equal('Hello World!');
        });
    });
    describe('.lcFirst', () => {
        it('should be string', () => {
            expect('AAA'.lcFirst()).to.be.a('string');
        });
        it('should be "aAA"', () => {
            expect('AAA'.lcFirst()).to.be.equal('aAA');
        });
    });
    describe('.toCamel', () => {
        const testList = {
            aaa_bbb_ccc: 'aaaBbbCcc',
            'aaa-bbb-ccc': 'aaaBbbCcc',
            'AaA bbB cCC': 'aaABbBCCC',
            'Aaa Bbb Ccc': 'aaaBbbCcc',
            aa_a_bb_b_c_c_c: 'aaABbBCCC'
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert "${src}" to "${dst}"`, () => {
                expect(src.toCamel()).to.be.a('string');
                expect(src.toCamel()).to.be.equal(dst);
            })
        );
    });
    describe('.toSnake', () => {
        const testList = {
            aaa_bbb_ccc: 'aaa_bbb_ccc',
            'aaa-bbb-ccc': 'aaa_bbb_ccc',
            'AaA bbB cCC': 'aa_a_bb_b_c_c_c',
            'Aaa Bbb Ccc': 'aaa_bbb_ccc'
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert "${src}" to "${dst}"`, () => {
                expect(src.toSnake()).to.be.a('string');
                expect(src.toSnake()).to.be.equal(dst);
            })
        );
    });
    describe('.toKebab', () => {
        const testList = {
            aaa_bbb_ccc: 'aaa-bbb-ccc',
            'aaa-bbb-ccc': 'aaa-bbb-ccc',
            'AaA bbB cCC': 'aa-a-bb-b-c-c-c',
            'Aaa Bbb Ccc': 'aaa-bbb-ccc'
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert "${src}" to "${dst}"`, () => {
                expect(src.toKebab()).to.be.a('string');
                expect(src.toKebab()).to.be.equal(dst);
            })
        );
    });
    describe('.toPascal', () => {
        const testList = {
            aaa_bbb_ccc: 'AaaBbbCcc',
            'aaa-bbb-ccc': 'AaaBbbCcc',
            'AaA bbB cCC': 'AaABbBCCC',
            'Aaa Bbb Ccc': 'AaaBbbCcc',
            aa_a_bb_b_c_c_c: 'AaABbBCCC'
        };
        Object.entries(testList).forEach(([src, dst]) =>
            it(`should convert "${src}" to "${dst}"`, () => {
                expect(src.toPascal()).to.be.a('string');
                expect(src.toPascal()).to.be.equal(dst);
            })
        );
    });
    describe('.repeat', () => {
        const testList = [
            { src: 'a12', count: 0, dst: '' },
            { src: 'a12', count: 1, dst: 'a12' },
            { src: 'a12', count: 2, dst: 'a12a12' },
        ];
        testList.forEach((row) =>
            it(`should convert "${row.src}" count ${row.count} to "${row.dst}"`, () => {
                expect(row.src.repeat(row.count)).to.be.a('string');
                expect(row.src.repeat(row.count)).to.be.equal(row.dst);
            })
        );
    });
});
