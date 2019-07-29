function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'lee', lastName: 'jiahua' };
document.body.innerHTML = greeter(user);
