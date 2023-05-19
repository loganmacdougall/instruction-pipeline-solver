import AssemblyLine from "../AssemblyLine";
import { RegisterInput, LabelInput } from "../AssemblyLineInputTypes"
import { AssemblyLineInstruction } from "../AssemblyLineInstruction";

export default class AssemblyLineCOND extends AssemblyLine {
  readonly conditionFunction: (i: number) => boolean;

  public constructor(label: LabelInput, source1: RegisterInput, condition = "i > 0") {
    super({
      Label: label,
      Source1: source1
    }, AssemblyLineInstruction.COND)
    // eslint-disable-next-line
    this.conditionFunction = (i) => eval(condition)
  }
}