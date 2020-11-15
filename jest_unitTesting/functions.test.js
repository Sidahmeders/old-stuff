const functions = require('./functions');

//! To be
test('Add 2 + 2 to get 4', () => {
    expect(functions.add(2,2)).toBe(4);
});
//! To be Not
test('Add 2 + 2 not to be 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

//! Check for Null values
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//! Check for Falsy values
test('should be falsy', () => {
    expect(functions.checkFalse(0)).toBeFalsy();
});
//! Check for Truthy values
test('should be Truthy', () => {
    expect(functions.checkTrue(null)).not.toBeTruthy();
});
//! toEqual 
test('User Should be Kilwa Zoldik Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "kilwa", 
        lastName: "zoldik"
    })
});
//! less than && grater than
test('should be under 1600', () => {
    expect(functions.weightTest()).toBeLessThan(1600)
})
//! Regex
test('No "z" In', () => {
    expect('kingKong').not.toMatch(/z/)
})


