import AssemblyLine from "../AssemblyLine";
import { RegisterInput, ImmediateInput } from "../AssemblyLineInputTypes"
import { AssemblyLineInstruction } from "../AssemblyLineInstruction";

export default class AssemblyLineLOAD extends AssemblyLine {
  public constructor(destination: RegisterInput, source1: RegisterInput, immediate: ImmediateInput = 0) {
    super({
      Destination: destination,
      Source1: source1,
      Immediate: immediate
    }, AssemblyLineInstruction.LOAD)
  }
}