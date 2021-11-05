interface Between {
    value: number,
    min: number,
    max: number,
    isStrict?: boolean
}

export const isBetween = ({ value, min, max, isStrict = false }: Between): boolean => (
    isStrict
        ? value > min && value < max
        : value >= min && value <= max
)
