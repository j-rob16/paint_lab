const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.addPaintCan = function(paintCan) {
    this.stock.push(paintCan);
}

Decorator.prototype.calculateTotalLitres = function(){
    let totalLitres = 0;
    for (let i = 0; i < this.stock.length; i++) {
        totalLitres += this.stock[i].litres
    };
    return totalLitres;
};

Decorator.prototype.canPaintRoom = function(room){
    let totalLitres = this.calculateTotalLitres();
    let roomArea = room.area;
    if (totalLitres >= roomArea){
        return true;
        
    };
    return false;
};

Decorator.prototype.PaintRoom = function(room){
    if ( this.canPaintRoom(room) ){
        room.painted = true;
    };
};

module.exports = Decorator;