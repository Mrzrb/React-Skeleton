declare interface IConfig {
    baseUrl?: string
}

const Config: IConfig = {
    baseUrl: process.env.NODE_ENV == "development" ? "http://localhost:3000" : `${process.env.REACT_APP_API_URL}`
}

export { Config }
