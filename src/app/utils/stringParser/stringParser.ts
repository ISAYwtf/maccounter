const stringParser = (strToDecode: string) => new DOMParser()
    .parseFromString(
        `<!doctype html><body>${strToDecode}`,
        'text/html',
    )
    .body
    .textContent

export default stringParser
