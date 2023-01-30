class lsuService {
    static set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    static get(key: string) {
        const result: string | null = localStorage.getItem(key)
        return JSON.parse(result || "")
    }
}
export default lsuService