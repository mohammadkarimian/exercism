export default class GradeSchool {

    private roster: Map<string,string[]>;
  
    constructor() {
      this.roster = new Map();
    }
  
    addStudent(name:string, grade:number) {
      let key = grade+'';
      if(this.roster.has(key)) {
        let names = this.roster.get(key);
        names.push(name);
        this.roster.set(key, names.sort());
      } else {
        this.roster.set(key, new Array(name));
      }
    }
  
    studentRoster(): Map <string,string[]>{
      return new Map([...this.roster.entries()].sort().map( a => [a[0], a[1].slice()] ));
    }
  
    studentsInGrade(grade:number):string[] {
      let key='' + grade;
      return this.roster.has(key) ? this.roster.get(key).slice() : [];
    }
  }