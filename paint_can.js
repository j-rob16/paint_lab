const PaintCan = function (litres, empty) {
    this.litres = litres;
    this.empty = empty;
};

PaintCan.prototype.drain = function () {
    this.empty = true;
}

module.exports = PaintCan;