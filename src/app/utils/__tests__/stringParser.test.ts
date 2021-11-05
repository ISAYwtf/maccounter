import { htmlStringParser } from '@utils/stringParser'

it('stringParser', () => {
    const text = 'Hello,&nbsp;World!'
    const expectedText = 'Hello, World!'
    const parsedText = htmlStringParser(text)?.replace(/\s/g, ' ')

    expect(parsedText).toEqual(expectedText)
})
