let user = {};
user.name = "John";
document.write(user.name);
user.surname = "Smith";
document.write(user.surname);
user.name = "Peter";
document.write(user.name);
delete user.name;
console.log(user);
