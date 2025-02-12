export interface IBots{
    name: string;
    cost: number
    all_time: number
    "7d": number
    "24h": number
    "30d": number
    "60d": number
    "90d": number
}

export interface IData {
    trading_capital: number
    trading_capital_currency: string
    on_hold: number
    balance:   number
    bots: IBots[]
}