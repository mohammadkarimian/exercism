class GradeSchool {
    constructor(
        readonly studentMap: Map<string, string[]> = new Map<string, string[]>()
    ) { }

    studentRoster(): Map<string, string[]> {
        const studentRoster = new Map<string, string[]>();

        this.studentMap.forEach((value, key) =>
            studentRoster.set(key, Object.assign([], value))
        );

        return studentRoster;
    }

    addStudent(name: string, grade: number) {
        let names: string[] = this.studentMap.get(String(grade)) || [];

        names.push(name);

        this.studentMap.set(String(grade), names.sort());
    }

    studentsInGrade(grade: number): string[] {
        return Object.assign([], this.studentMap.get(String(grade))) || [];
    }
}

export default GradeSchool;
