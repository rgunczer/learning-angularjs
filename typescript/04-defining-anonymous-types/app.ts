var todo: { name: string };

todo = { age: 41 }

function totalLength1(x: (string | any[]), y: (string | any[]) ): number {
    var total: number = x.length + y.length;
    return total;
}

function totalLength2(x: { length: number}, y: {length: number}): number {
    var total: number = x.length + y.length;
    return total;
}