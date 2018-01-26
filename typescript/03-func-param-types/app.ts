function totalLength(x: string, y: string) : number
function totalLength(x: any[], y: any[]) : number
// union types 
function totalLength(x: (string | any[]), y: (any[] | string)) : number {
    let total : number = x.length + y.length;
    
    x.slice(0);

    // type guard syntax
    if (x instanceof Array) {
        x.push('abc');
    }
    
    if (x instanceof String) {
        x.substr(1);
    }

    if (typeof x === 'string') {
        x.substr(1);
    }
    
    
    return total;
}