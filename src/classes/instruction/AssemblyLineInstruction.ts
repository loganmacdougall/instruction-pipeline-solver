export const enum AssemblyLineInstruction {
  ALU,
  ALUi,
  COND,
  JUMP,
  LABEL,
  LOAD,
  STORE
}

export const AssemblyLineLabels: Map<AssemblyLineInstruction, string> = new Map([
  [AssemblyLineInstruction.ALU, "ALU"],
  [AssemblyLineInstruction.ALUi, "ALUi"],
  [AssemblyLineInstruction.COND, "COND"],
  [AssemblyLineInstruction.JUMP, "JUMP"],
  [AssemblyLineInstruction.LABEL, "LABEL"],
  [AssemblyLineInstruction.LOAD, "LOAD"],
  [AssemblyLineInstruction.STORE, "STORE"]
])