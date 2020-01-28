const mocha = require("mocha")
const assert = require("assert")
const userCollection = require("../models/users")
describe("Testing base functions",()=>{
    describe("Saving to the MongoDB",()=>{
        it("Saves records to the database",()=>{
            const testChar = new userCollection({
                name:"Ian"
            })
            testChar.save().then((done)=>{
                assert(testChar.isNew === false);
                done()
            })
        })
    })
})