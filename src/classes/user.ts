import  Role  from './role'
export default class User {
    private user_id:number;
    private first_name:string;
    private middle_name:string;
    private last_name:string;
    private password:string;
    private email:string;
    private role:Role|string;
    constructor(user_id:number,first_name:string,middle_name:string,last_name:string,password:string,email:string,role:Role|string){
        this.user_id = user_id;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.password = password;
        this.email = email;
        this.role = role;
    }
    getUserId():number {
        return this.user_id
    }
    getFirstName():string{
        return this.first_name;
    }
    getMiddleName():string{
        return this.middle_name;
    }
    getLastName():string{
        return this.last_name;
    }
    getPassword():string{
        return this.password;
    }
    getEmail():string{
        return this.email;
    }
    getRole():Role|string{
        return this.role;
    }
    setUserId(user_id:number):void{
        this.user_id = user_id;
    }
    setFirstName(first_name:string):void{
        this.first_name = first_name;
    }
    setMiddleName(middle_name:string):void{
        this.middle_name = middle_name;
    }
    setLastName(last_name:string):void{
        this.last_name = last_name;
    }
    setPassword(password:string):void{
        this.password = password;
    }
    setEmail(email:string):void{
        this.email = email;
    }
    setRole(role:Role|string):void{
        this.role = role;
    }
}

