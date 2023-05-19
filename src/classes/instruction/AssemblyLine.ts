import { RegisterInput, ImmediateInput, LabelInput } from "./AssemblyLineInputTypes"
import { AssemblyLineInstruction } from "./AssemblyLineInstruction"

type AssemblyInputData = {
  Source1?: RegisterInput,
  Source2?: RegisterInput,
  Destination?: RegisterInput,
  Immediate?: ImmediateInput,
  Label?: LabelInput
}

export default abstract class AssemblyLine {
  public constructor(private _inputData: AssemblyInputData, readonly assemblyLineType: AssemblyLineInstruction) { }

  public get inputData() {
    return this._inputData
  }
}