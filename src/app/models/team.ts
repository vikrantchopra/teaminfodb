export interface Team {
    name: string,
    process: string,
    coach: string,
    manager: string,
    member: {
        name: string,
        role: string,
        phone: string,
        email: string,
        extension: string,
        cubicle: string
    }
}