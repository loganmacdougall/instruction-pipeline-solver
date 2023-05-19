import AssemblyLine from "./AssemblyLine";

export default class AssemblyProgramData {
  public constructor(private _lines: Array<AssemblyLine> = []) { }

  public get lines() {
    return this._lines as ReadonlyArray<AssemblyLine>
  }

  public insert(line: AssemblyLine, i: number = -1) {
    let ind = i
    if (ind < 0) ind += this._lines.length
    if (ind < 0 || ind > this._lines.length) throw new Error(`Index ${i} is out of range for insert in assembly program of length ${this._lines.length}`)
    this._lines.splice(ind, 0, line)
  }

  public remove(i: number = -1) {
    let ind = i
    if (ind < 0) ind += this._lines.length
    if (ind < 0 || ind > this._lines.length - 1) throw new Error(`Index ${i} is out of range for removing in assembly program of length ${this._lines.length}`)
    this._lines.splice(ind, 1)
  }
};