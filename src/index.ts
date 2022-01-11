declare global {
    interface String {
        lcFirst(): string;
        ucFirst(): string;
        ucWords(): string;
        toInt(): number;
        toFloat(): number;
        toCamel(): string;
        toSnake(): string;
    }
}
String.prototype.lcFirst = function(): string {
    return String(this)[0].toLowerCase() + String(this).slice(1);
};
String.prototype.ucFirst = function(): string {
    return String(this)[0].toUpperCase() + String(this).slice(1);
};
String.prototype.ucWords = function(): string {
    return String(this).replace(/^([a-z])|\s+([a-z])/g, $1 => $1.toUpperCase());
};
String.prototype.toInt = function(): number {
    return parseInt(String(this), 10);
};
String.prototype.toFloat = function(): number {
    return parseFloat(String(this));
};
String.prototype.toCamel = function(): string {
    return String(this).replace(/([-_][a-z])/g, letter => `${letter.toUpperCase()}`.substring(1));
};
String.prototype.toSnake = function(): string {
    return String(this).replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};

export {};
