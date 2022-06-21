const assert = require('assert');
const PaintCan = require('../paint_can');

describe('PaintCan', function () {

    let paintCan;
    
    beforeEach(function() {
        paintCan = new PaintCan(5, false)
    })

    it('should have a number of litres of paint', function() {
        const actual = paintCan.litres;
        assert.strictEqual(actual, 5);
    })
    it('should check if it\'s empty', function(){
        const actual = paintCan.empty;
        assert.strictEqual(actual,false)
    })
    it('should be able to empty itself of paint', function () {
        paintCan.drain();
        const actual = paintCan.empty;
        assert.strictEqual(actual,true);
    })
})