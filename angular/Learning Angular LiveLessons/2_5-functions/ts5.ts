function myFunction(param: string): string {
    return "abc";
}

function myOtherFunction(param: string): void {
    return 123; // error void fn should not return anything
}

