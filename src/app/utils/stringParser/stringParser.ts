const stringParser = (strToDecode: string): string | null => new DOMParser()
    .parseFromString(
        `<!doctype html><body>${strToDecode}`,
        'text/html',
    )
    .body
    .textContent

export default stringParser
