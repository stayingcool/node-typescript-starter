//https://basarat.gitbook.io/typescript/type-system/enums
enum Tristate {
  False,
  True,
  Unknown,
}
console.log(Tristate[1]); // "True"
console.log(Tristate['False']); // 0
console.log(Tristate[Tristate.False]); // "False" because `Tristate.False == 0`
