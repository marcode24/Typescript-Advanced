// example using interfaces

interface IBook {
  title: string
}

interface IBestSeller extends IBook {
  sales: number
}

// example using types

type User = {
  name: string,
}

type Learner = User & { registeredCourses: number };
// a type can be extends an interface and vice versa
type OutdateBooks = IBook & { endOfSaleDate: Date };