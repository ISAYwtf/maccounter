import { isBetween } from '@utils/isBetween'

export const getCurrentTimePeriod = () => {
    const periods = {
        night: {
            min: 0,
            max: 5,
        },
        morning: {
            min: 6,
            max: 11,
        },
        afternoon: {
            min: 12,
            max: 17,
        },
        evening: {
            min: 18,
            max: 23,
        },
    }

    let currentHour = new Date()
        .toLocaleTimeString('en-US', { hour12: false })
        .split(':')[0] as unknown as number

    if (Number(currentHour) === 24) {
        currentHour = 0
    }

    const isNight = isBetween({ value: currentHour, ...periods.night })
    const isEvening = isBetween({ value: currentHour, ...periods.evening })
    const isAfternoon = isBetween({ value: currentHour, ...periods.afternoon })

    switch (true) {
        case isNight:
            return 'night'
        case isEvening:
            return 'evening'
        case isAfternoon:
            return 'afternoon'
        default:
            return 'morning'
    }
}
