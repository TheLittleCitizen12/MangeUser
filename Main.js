const _password = Symbol('password');
class User{
    userName;

    constructor(userName, password)
    {
        this.userName = userName;
        this[_password]= password;
    }
    
    
}

class ManageUsers{
    constructor(){
        this.connectedUsers = [];
        this.users = new Set();
        
    }
    addNewUser(user){
        if(this.users.has(user.userName))
        {
            console.log("This user already exsit in the system");
        }
        this.users.add(user);
    }
    login(userNameInput,passwordInput){
        let correctInput = false;
        for (let value of this.users){
            if(value.userName == userNameInput && value[_password] == passwordInput )
            {
                this.connectedUsers.push(value.userName);
                correctInput=true;
                console.log('you entered the system')
                break;
            }
            
        }
        if(!correctInput){
            console.log("Incorrect user or password")
        }
    }

    checkIfUserOnline(inputUserName)
    {
        if(this.connectedUsers.includes(inputUserName))
        {
            console.log("the user "+ inputUserName+" is connected");
        }
        else{
            console.log("the user "+ inputUserName+" is not connected!")
        }
    }

    logOut(InputUserName)
    {
        const index = this.connectedUsers.indexOf(InputUserName);
        if(index> -1)
        {
            this.connectedUsers.splice(index,1);
          
            console.log(InputUserName + " disconnected");
        }
        else{
            console.log(InputUserName + " is already disconnected or don't exsit in the system");
        }

    }
}
var user1 = new User('bob', 123456);
var user2 = new User('gil', 12345);
var mangeUsers= new ManageUsers();
mangeUsers.addNewUser(user1);
mangeUsers.addNewUser(user2);
mangeUsers.login('bob',123456);
mangeUsers.login('gil',12345);
mangeUsers.checkIfUserOnline('bob');
mangeUsers.checkIfUserOnline('gil');
mangeUsers.logOut('gil');
mangeUsers.checkIfUserOnline('gil');


