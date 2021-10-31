import stringParser from './stringParser'

it('stringParser', () => {
    const text = 'Hello,&nbsp;World!'
    const expectedText = 'Hello, World!'
    const parsedText = stringParser(text)?.replace(/\s/g, ' ')

    expect(parsedText).toEqual(expectedText)
})
