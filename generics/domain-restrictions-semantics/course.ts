import { AggregateRoot } from "./aggregate-root";

export class Course implements AggregateRoot {
  constructor(readonly id: string, readonly url: string) {}
}
