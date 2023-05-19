import AssemblyLine from "../AssemblyLine";
import { RegisterInput, ImmediateInput } from "../AssemblyLineInputTypes"
import { AssemblyLineInstruction } from "../AssemblyLineInstruction";

export default class AssemblyLineSTORE extends AssemblyLine {
  public constructor(source1: RegisterInput, destination: RegisterInput, immediate: ImmediateInput = 0) {
    super({
      Destination: destination,
      Source1: source1,
      Immediate: immediate
    }, AssemblyLineInstruction.STORE)
  }
}