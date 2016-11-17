import { subtract, multiply, map } from 'ramda'
import { ema } from './ema'
import { ema as _ema } from './movingAverage'
import { CLOSE } from './cons'
import { mix } from './functional'

export const dif = (short = 12, long = 26) => data => mix(ema(CLOSE, short)(data), ema(CLOSE, long)(data), subtract)
export const dea = (dif, m = 9) => data => _ema(m, dif(data))
export const macd = (dif, dea) => data => map(multiply(2), mix(dif(data), dea(data), subtract))
