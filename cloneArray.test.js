const cloneArray = require('./cloneArray')


test('properly clone array',()=>{
    const array = ['a','b','c']
    expect(cloneArray(array)).toEqual(array)
})

