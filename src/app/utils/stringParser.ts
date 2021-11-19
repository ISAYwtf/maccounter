import { space } from '@assets/symbols'

export const htmlStringParser = (strToDecode: string): string | undefined => {
    const decodedStr = new DOMParser()
        .parseFromString(
            `<!doctype html><body>${strToDecode}`,
            'text/html',
        )
        .body
        .textContent
    return decodedStr ?? undefined
}

export const phoneParser = (phoneToParse: string): string | undefined => {
    const regExp = /(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})$/s
    const match = phoneToParse.match(regExp)

    if (!match || !match[0]) { return undefined }
    match.shift()

    return match.join(space)
}
