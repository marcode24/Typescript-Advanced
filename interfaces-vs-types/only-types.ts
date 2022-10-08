// primitive

type Name = string;

type Course = {
  title: string;
  chaptes: number;
}

interface IBook {
  title: string;
  pages: number;
}

// union
type LearningResource = Course | IBook;

// tuple
type CourseLearners = [Course, number];
