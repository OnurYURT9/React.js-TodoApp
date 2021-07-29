const user ={
    name: 'onuryurtt',
    email: 'oyurt43@gmail.com',
    city : 'Kütahya',
    roles: ['admin','customer'],
    getRoles: function(){
        const that = this;
      this.roles.forEach((role) =>{
          console.log(this.city);
            console.log(role);
      })
        //  console.log(this.email)
    }
}
user.getRoles();

const addES5 = function() {
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;

}
console.log(addES5(5,10,20));
console.log(addES5(5,10,15,20,40));
console.log('onur');