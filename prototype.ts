class UndoManager {
    private history:string[]=[]
    private index:number=-1
    // private currentState:string[]=[]
    public do(text:string){
        // this.currentState.push(text+' ')
        this.history.push(text+' ')
        this.index++
        console.log(this.history.join(''))
    }
    public undo(){
        if(this.index<0){
            console.log("Can't undo")
            return
        }
        this.index--
        // this.history.push(this.currentState.pop()??'')
        console.log(this.history.slice(0,this.index+1).join(''))
    }
    public redo(){
        if(this.index===this.history.length){
            console.log("Can't redo")
            return
        }
        this.index++
        // this.currentState.push(this.history.pop()??'')
        console.log(this.history.slice(0,this.index+1).join(''))
    }
}

let undoTest=new UndoManager
undoTest.do("Beri")
undoTest.do("Cletus")
undoTest.do("Beri")
undoTest.do("Beri")
undoTest.undo()
undoTest.undo()
undoTest.undo()
undoTest.undo()
undoTest.undo()
undoTest.redo()
undoTest.redo()
undoTest.redo()
undoTest.redo()
undoTest.redo()
undoTest.redo()