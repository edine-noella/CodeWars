// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

export function generateShape(int: number): string {
    let result: string = "";
    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            result += "+";
        }
        if (i < int - 1) {
            result += "\n";
        }
    }
    return result;
  }

    console.log(generateShape(3)); 