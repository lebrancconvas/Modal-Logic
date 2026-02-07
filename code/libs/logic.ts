type TruthValue = "T" | "F";

export class P {
  truthValue: TruthValue;

  constructor(truthValue: TruthValue) {
    this.truthValue = truthValue;
  }

  value(): TruthValue | undefined {
    switch(this.truthValue) {
      case "T":
        return "T";
      case "F":
        return "F";
      default:
        return undefined;
    }
  }

  toBool(): boolean | undefined {
    switch(this.truthValue) {
      case "T":
        return true;
      case "F":
        return false;
      default:
        return undefined;
    }
  }
};

export const not = (p: P): P | undefined => {
  if(p.value() === "T") {
    return new P("F");
  } else if(p.value() === "F") {
    return new P("T");
  } else {
    return;
  }
};

export const and = (p: P, q: P): P | undefined => {
  if(p.value() === "T" && q.value() === "T") {
    return new P("T");
  } else if(p.value() === "T" && q.value() === "F") {
    return new P("F");
  } else if(p.value() === "F" && q.value() === "T") {
    return new P("F");
  } else if(p.value() === "F" && q.value() === "F") {
    return new P("F");
  } else {
    return;
  }
};

export const or = (p: P, q: P): P | undefined => {
  if(p.value() === "T" && q.value() === "T") {
    return new P("T");
  } else if(p.value() === "T" && q.value() === "F") {
    return new P("T");
  } else if(p.value() === "F" && q.value() === "T") {
    return new P("T");
  } else if(p.value() === "F" && q.value() === "F") {
    return new P("F");
  } else {
    return;
  }
};

export const imply = (p: P, q: P): P | undefined => {
  if(p.value() === "T" && q.value() === "T") {
    return new P("T");
  } else if(p.value() === "T" && q.value() === "F") {
    return new P("F");
  } else if(p.value() === "F" && q.value() === "T") {
    return new P("T");
  } else if(p.value() === "F" && q.value() === "F") {
    return new P("T");
  } else {
    return;
  }
};

export const iff = (p: P, q: P): P | undefined => {
  if(p.value() === "T" && q.value() === "T") {
    return new P("T");
  } else if(p.value() === "T" && q.value() === "F") {
    return new P("F");
  } else if(p.value() === "F" && q.value() === "T") {
    return new P("F");
  } else if(p.value() === "F" && q.value() === "F") {
    return new P("T");
  } else {
    return;
  }
};

