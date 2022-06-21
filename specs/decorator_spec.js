const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can')
const Room = require('../room')

describe('Decorator', function() {

    let decorator;
    let paintCan;
    let room;

    beforeEach(function() {
        decorator = new Decorator()
        paintCan = new PaintCan(5, false)
        room = new Room(10,false)
    })
    it('should have an empty paint stock',function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual,[])
    })
    it('should be able to add a can of paint to stock', function() {
        decorator.addPaintCan(paintCan);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
    })
    it('should be able to calculate the total litres of paint in the stock',function(){
        decorator.addPaintCan(paintCan);
        const actual = decorator.calculateTotalLitres();
        assert.strictEqual(actual, 5);
    });
    it('should return false for calculating can paint room', function(){
        decorator.addPaintCan(paintCan);
        const actual = decorator.canPaintRoom(room);
        assert.strictEqual(actual, false);
    })
    it('should return true for calculating can paint room', function () {
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        const actual = decorator.canPaintRoom(room);
        assert.strictEqual(actual, true);
    })
    
    it('should be able to paint the room if it has enough paint in stock', function(){
        decorator.addPaintCan(paintCan);
        decorator.addPaintCan(paintCan);
        const actual = decorator.paintRoom(room);
        assert.strictEqual(actual, true)
    })

})