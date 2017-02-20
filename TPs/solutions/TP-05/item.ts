export default class Item {
    readonly id: number;
    readonly label: string;
    readonly price: number;

    constructor(id: number,
                label: string,
                price: number) {
        this.id = id;
        this.label = label;
        this.price = price;
    };
}