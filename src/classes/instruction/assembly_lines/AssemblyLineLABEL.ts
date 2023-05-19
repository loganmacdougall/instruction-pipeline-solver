import AssemblyLine from "../AssemblyLine";
import { LabelInput } from "../AssemblyLineInputTypes"
import { AssemblyLineInstruction } from "../AssemblyLineInstruction";

export default class AssemblyLineLABEL extends AssemblyLine {
  public constructor(label: LabelInput) {
    super({
      Label: label
    }, AssemblyLineInstruction.LABEL)
  }
}