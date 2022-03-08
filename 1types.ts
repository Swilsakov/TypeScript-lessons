// Types const
const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 41
const float: number = 4.1
const num: number = 312e3

const message: string = 'Hello TS!'

const numberArray: number [] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

// Tuple
const contact: [string, number] = ['Vladimir', 996999099099]

// Any
let variable: any = 42
variable = 'New String'
variable = []

// ===================================
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Bob')

// Never

// function throwError(message: string): never {
//     throw new Error(message)
// }

// function infinite(): never {
//     while (true) {

//     }
// }

// =========== Own Type ===========

type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined
