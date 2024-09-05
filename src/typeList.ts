/**eslint-disable@typescript-eslint/no-unused-vars */

/** typeScriptの基本の型*/

// boolean

let bool: boolean = true;

// number 数値

let num: number = 0;

// string 文字列

let str: string = "A";

// Array 配列

let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 配列の中身の型が違う場合

let tuple: [number, string] = [0, "A"];

// any なんでも入る

let any1: any = false;

// void 関数の戻り値がない場合

const funcA = (): void => {
  const test = "TEST";
};

// null

let null1: null = null;

// undefined

let undefined1: undefined = undefined;

// object

let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };




