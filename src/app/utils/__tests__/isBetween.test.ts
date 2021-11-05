import { isBetween } from '@utils/isBetween'

it('isBetween', () => {
    const result1 = isBetween({ value: 1, min: 14, max: 19 })
    const result2 = isBetween({ value: -15, max: 5, min: 10, isStrict: true })
    const result3 = isBetween({ value: -15, max: -10, min: -20, isStrict: true })
    const result4 = isBetween({ value: 0, min: 0, max: 5, isStrict: true })
    const result5 = isBetween({ value: 0, min: 0, max: 5 })

    expect(result1).toBeFalsy()
    expect(result2).toBeFalsy()
    expect(result3).toBeTruthy()
    expect(result4).toBeFalsy()
    expect(result5).toBeTruthy()
})
