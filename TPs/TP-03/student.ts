export class Student {
    readonly id: number;
    readonly lastname: string;
    readonly firstname: string;
    readonly grades: ReadonlyArray<number>;

    constructor(id: number,
                lastname: string,
                firstname: string,
                grades: number[]) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.grades = grades;
    };

    static NULL = new Student(0, '', '', []);
}