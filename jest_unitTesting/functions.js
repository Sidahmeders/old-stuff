const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkFalse: f => f,
    checkTrue: t => t,
    createUser: () => {
        const user = {firstName:"kilwa"};
        user.lastName = "zoldik";
        return user;
    },
    weightTest: () => {
        const load1 = 700;
        const load2 = 500;
        return load1 + load2;
    }
}


module.exports = functions;
