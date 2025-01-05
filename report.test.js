const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 2 pages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3
    }
    const actual = sortPages(input)
    const expeceted = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expeceted)
})

test('sortPages 2 pages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3,
        'https://wagslane.dev/path/path3': 5,
        'https://wagslane.dev/path2': 2,
        'https://wagslane.dev/path4': 9,
        'https://wagslane.dev/path3': 4
    }
    const actual = sortPages(input)
    const expeceted = [
        ['https://wagslane.dev/path4', 9],
        ['https://wagslane.dev/path/path3', 5],
        ['https://wagslane.dev/path3', 4],
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path2', 2],
        ['https://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expeceted)
})