export const htmlStringParser = (strToDecode: string): string | null => new DOMParser()
    .parseFromString(
        `<!doctype html><body>${strToDecode}`,
        'text/html',
    )
    .body
    .textContent
