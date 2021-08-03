const user  = {
    name: 'onuryurt',
    getUserName()
    {
        return this.name;
    }
}
console.log(user.name);
console.log(user.getUserName());

const getName = user.getUserName;

console.log(getName());