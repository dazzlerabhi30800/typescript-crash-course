// class User {
//     email: string
//     private name: string
//     private readonly city: string = "palwal"
//     // city: string = "palwal"
//     constructor(email: string, name: string,) {
//         this.name = name;
//         this.email = email;
//     }
// }

class User {
  // private _courseCount: number = 3;
  protected _courseCount: number = 3;
  readonly city: string = "palwal";

  constructor(
    public email: string,
    public name: string,
    private userId?: number
  ) {
    this.name = name;
    this.email = email;
    this.userId = userId;
    this.city = "Jaipur";
  }

  private deleteToken() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum < 4) {
      throw new Error("Course Count should be more than 1");
    }
    this._courseCount = courseNum;
    this.deleteToken();
  }
}

class SubUser extends User {
  constructor(
    email: string,
    name: string,
    userId: number,
    public id: number,
    public newNo: string
  ) {
    super(email, name, userId);
    this.id = id;
    this.newNo = newNo;
  }
  changeCourseCount() {
    this._courseCount = 10;
  }
}

const abhi = new User("abhis@gmail.com", "abhishek");
// abhi.getAppleEmail;
// abhi.courseCount = 3;
// abhi.courseCount = 5;
// console.log(abhi);

const newSub = new SubUser("abhi", "abhisf@gmail.com", 45, 45, "4565");
// const appleEmail = newSub.getAppleEmail;
// newSub.changeCourseCount();
// console.log(newSub);
// console.log(appleEmail);
