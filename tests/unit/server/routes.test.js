import { jest, expect, describe, test, beforeEach } from '@jest/globals'
import config from '../../../server/config.js'

const {
    pages
} = config
describe('#Routes - test site for api response', ()=>{
    beforeEach(()=>{
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })
    test.todo('GET / - should redirect to home page')
    test.todo(`GET /home - should response with ${pages.homeHTML} file stream`)
    test.todo(`GET /controller - should restponse with ${pages.controllerHTML} file stream`)
    test.todo(`GET /file.ext - should response with file stream`)
    test.todo(`GET /unknown - given an inexistent route it should response with 404`)

    describe('exceptions', ()=>{
        test('given inexistent file it should respond with 404')
        test('given an error it should respond with 500')
    })
    /* test('my test', ()=>{
        expect(true).toBeTruthy()
    }) */
})