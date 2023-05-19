import AssemblyLine from "../AssemblyLine";
import { RegisterInput } from "../AssemblyLineInputTypes"
import { AssemblyLineInstruction } from "../AssemblyLineInstruction";

export default class AssemblyLineALU extends AssemblyLine {
  public constructor(destination: RegisterInput, source1: RegisterInput, source2: RegisterInput) {
    super({
      Source1: source1,
      Source2: source2,
      Destination: destination
    }, AssemblyLineInstruction.ALU)
  }
}