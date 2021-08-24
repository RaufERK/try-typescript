let inputType: unknown;
let userName: string;

inputType = 5;
inputType = 'PARAM TARAM';

function createErrorFoo(message: string, code: number): never {
  throw { message, code };
}


createErrorFoo('Now we Hve Erorr!!', 501);
