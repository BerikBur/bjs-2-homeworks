function parseCount(number) {
    const result = parseFloat(number);
    if(isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if(a + b < c || a + c < b || c + b < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const s = this.perimeter / 2;
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}