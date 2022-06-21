const assert = require('assert');
const Room = require('../room');

describe('Room', function () {

    let room;

    beforeEach(function () {
        room = new Room(10, false)
    })

    it('should have area in m^2', function (){
        const actual = room.area;
        assert.strictEqual(actual, 10);
    })
    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false)
    })
    it('should be able to be painted', function () {
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
    
})
