const expect = require('expect')
const request = require('supertest')

var { app } = require('./../server.js')
var { Todo } = require('./../models/todo')

var todos = [{
    text: 'day la test text1'
}, {
    texxt: 'day la test text2'
}]

beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos)
        done()
    })
})

describe('Post /todos', () => {
    it("show crewate a new todo", (done) => {
        var text = 'Test todo text';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2)
                    done()
                }).catch((err) => {
                    done(err)
                })
            })
    })
})