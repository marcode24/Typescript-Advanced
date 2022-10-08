
// example using interfaces

interface ISayHiToIsma {
  (name: string): string;
}

const sayHiToIsma: ISayHiToIsma = (name: string) => {
  return `Hello ${name}`;
}

// example using types

type sayHiToJavi = (name: string) => string;

const sayHiToJavi: sayHiToJavi = (name: string) => {
  return `Hello ${name}`;
}