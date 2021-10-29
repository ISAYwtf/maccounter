const stringParser = (strToDecode: string) => {
    const parser = new DOMParser()
    const decodedStr = parser
        .parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html')
        .body.textContent

    return decodedStr
}

export default stringParser
