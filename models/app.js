const db=require('../db/config')

class Todo{
    constructor (todo){
        this.id=todo.id ||null;
        this.action=todo.action;
        this.description=todo.description;
        this.status=todo.status;
    }

    save(){
        return db.one(`INSERT INTO todo_list 
        (action, description,status)
        VALUES($/action/,$/description/,$/status/ RETURNING *`,this )
        .then((item)=>{
            return Object.assign(this,item);
        });
    }

    static getAll(){
        return db.manyOrNone(`SELECT * FROM todo_list`)
        .then((item)=>{
            return item.map((items)=>{
                return new this(items)
            })
        })
    }
}