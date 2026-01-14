var UndoManager = /** @class */ (function () {
    function UndoManager() {
        this.history = [];
        this.index = -1;
    }
    // private currentState:string[]=[]
    UndoManager.prototype.do = function (text) {
        // this.currentState.push(text+' ')
        this.history.push(text + ' ');
        this.index++;
        console.log(this.history.join(''));
    };
    UndoManager.prototype.undo = function () {
        if (this.index < 0) {
            console.log("Can't undo");
            return;
        }
        this.index--;
        // this.history.push(this.currentState.pop()??'')
        console.log(this.history.slice(0, this.index + 1).join(''));
    };
    UndoManager.prototype.redo = function () {
        if (this.index === this.history.length) {
            console.log("Can't redo");
            return;
        }
        this.index++;
        // this.currentState.push(this.history.pop()??'')
        console.log(this.history.slice(0, this.index + 1).join(''));
    };
    return UndoManager;
}());
var undoTest = new UndoManager;
undoTest.do("Beri");
undoTest.do("Cletus");
undoTest.do("Beri");
undoTest.do("Beri");
undoTest.undo();
undoTest.undo();
undoTest.undo();
undoTest.undo();
undoTest.undo();
undoTest.redo();
undoTest.redo();
undoTest.redo();
undoTest.redo();
undoTest.redo();
undoTest.redo();
