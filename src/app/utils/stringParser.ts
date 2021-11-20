import { space } from '@assets/symbols'

type StringParser = string | undefined

export const htmlStringParser = (strToDecode: string): StringParser => {
    const decodedStr = new DOMParser()
        .parseFromString(
            `<!doctype html><body>${strToDecode}`,
            'text/html',
        )
        .body
        .textContent
    return decodedStr ?? undefined
}

export const phoneParser = (phoneToParse: string): StringParser => {
    const regExp = /(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})$/s
    const match = phoneToParse.match(regExp)

    if (!match || !match[0]) {
        return undefined
    }
    match.shift()

    return match.join(space)
}

export const getFirstLetters = (strToDecode: string, join?: string | boolean): StringParser | Array<string> => {
    const regExp = /\b[A-Z]|(?<=^|\s)[А-ЯЁ]/gu
    const match = strToDecode.match(regExp)

    if (!match) { return undefined }

    if (join === true) {
        return match.join('')
    }
    if (join) {
        return match.join(join)
    }
    return match
}

export const nameParser = (firstName: string, secondName: string): StringParser => {
    const initials = getFirstLetters(`${firstName} ${secondName}`, true)
    return typeof initials === 'string' ? initials : initials?.join('')
}
