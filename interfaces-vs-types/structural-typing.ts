// using interfaces

interface ICourseInterface {
  title: string,
  chapters: number,
}

const refactorCourse: ICourseInterface = {
  title: 'ejemplo',
  chapters: 2,
}

// using types

type CourseType = {
  title: string,
  chapters: number,
}

const patternsCourse: CourseType = {
  title: 'ejemplo',
  chapters: 2,
}