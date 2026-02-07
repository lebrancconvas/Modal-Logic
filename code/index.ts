import { P, and, or, imply, iff } from "./libs/logic";

function main() {
  const t = new P("T");
  const f = new P("F");
  console.log(and(t, f));
}

main();