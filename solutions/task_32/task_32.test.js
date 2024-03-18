"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_32_1 = require("./task_32");
// Mock console.log to avoid cluttering the test output
const originalLog = console.log;
console.log = jest.fn();
describe('checkUsernames function', () => {
    afterEach(() => {
        // Clear all mocks after each test
        jest.clearAllMocks();
    });
    afterAll(() => {
        // Restore console.log after all tests
        console.log = originalLog;
    });
    test('should detect taken usernames and suggest a new username', () => {
        const localCurrentUsers = ["admin", "User1", "User2", "User3", "User4", "user5"];
        const localNewUsers = ["user5", "User7", "user4", "user9", "user10"];
        (0, task_32_1.checkUsernames)(localCurrentUsers, localNewUsers);
        expect(console.log).toHaveBeenCalledWith('The username "user5" is already taken. Please enter a new username.');
        expect(console.log).toHaveBeenCalledWith('The username "user4" is already taken. Please enter a new username.');
    });
    test('should confirm that new usernames are available', () => {
        const localCurrentUsers = ["admin", "User1", "User2", "User3", "User4", "user5"];
        const localNewUsers = ["User6", "User7", "User8"];
        (0, task_32_1.checkUsernames)(localCurrentUsers, localNewUsers);
        expect(console.log).toHaveBeenCalledWith('The username "User6" is available.');
        expect(console.log).toHaveBeenCalledWith('The username "User7" is available.');
        expect(console.log).toHaveBeenCalledWith('The username "User8" is available.');
    });
    test('should not be case-sensitive', () => {
        const localCurrentUsers = ["admin", "User1", "User2", "User3", "User4", "user5"];
        const localNewUsers = ["ADMIN", "user1", "USER2", "user3", "user4", "user5"];
        (0, task_32_1.checkUsernames)(localCurrentUsers, localNewUsers);
        expect(console.log).toHaveBeenCalledWith('The username "ADMIN" is already taken. Please enter a new username.');
        expect(console.log).toHaveBeenCalledWith('The username "user1" is already taken. Please enter a new username.');
        expect(console.log).toHaveBeenCalledWith('The username "USER2" is already taken. Please enter a new username.');
        expect(console.log).toHaveBeenCalledWith('The username "user3" is already taken. Please enter a new username.');
        expect(console.log).toHaveBeenCalledWith('The username "user4" is already taken. Please enter a new username.');
        expect(console.log).toHaveBeenCalledWith('The username "user5" is already taken. Please enter a new username.');
    });
    test('should handle empty arrays', () => {
        const localCurrentUsers = [];
        const localNewUsers = ["User1", "User2", "User3"];
        (0, task_32_1.checkUsernames)(localCurrentUsers, localNewUsers);
        expect(console.log).toHaveBeenCalledWith('The username "User1" is available.');
        expect(console.log).toHaveBeenCalledWith('The username "User2" is available.');
        expect(console.log).toHaveBeenCalledWith('The username "User3" is available.');
    });
});
