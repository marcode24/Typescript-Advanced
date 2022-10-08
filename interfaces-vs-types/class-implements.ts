// example using interfaces

interface IWeb {
  url: string
}

class CodelyWeb implements IWeb {
  url: 'example-url'
}

// example using types

type Step = {
  name: string,
}

class QuizzStep implements Step {
  name: 'interface vs type'
}