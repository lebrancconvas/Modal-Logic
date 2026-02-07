import { describe, test, expect } from "bun:test"; 
import { P, not, and, or, imply, iff } from "../libs/logic";

const t = new P("T");
const f = new P("F");

describe("Test NOT", () => {
  test("~T === F", () => {
    expect(not(t)?.value()).toBe("F");
    expect(not(t)?.toBool()).toBe(false);
  });

  test("~F === T", () => {
    expect(not(f)?.value()).toBe("T");
    expect(not(f)?.toBool()).toBe(true);
  })
});

describe("Test AND", () => {
  test("T ^ T === T", () => {
    expect(and(t, t)?.value()).toBe("T");
    expect(and(t, t)?.toBool()).toBe(true);
  });

  test("T ^ F === F", () => {
    expect(and(t, f)?.value()).toBe("F");
    expect(and(t, f)?.toBool()).toBe(false);
  });

  test("F ^ T === F", () => {
    expect(and(f, t)?.value()).toBe("F");
    expect(and(f, t)?.toBool()).toBe(false);
  });

  test("F ^ F === F", () => {
    expect(and(f, f)?.value()).toBe("F");
    expect(and(f, f)?.toBool()).toBe(false);
  });
});

describe("Test OR", () => {
  test("T v T === T", () => {
    expect(or(t, t)?.value()).toBe("T");
    expect(or(t, t)?.toBool()).toBe(true);
  });

  test("T v F === T", () => {
    expect(or(t, f)?.value()).toBe("T");
    expect(or(t, f)?.toBool()).toBe(true);
  });

  test("F v T === T", () => {
    expect(or(f, t)?.value()).toBe("T");
    expect(or(f, t)?.toBool()).toBe(true);
  });

  test("F v F === F", () => {
    expect(or(f, f)?.value()).toBe("F");
    expect(or(f, f)?.toBool()).toBe(false);
  });
});

describe("Test IMPLY", () => {
  test("T -> T === T", () => {
    expect(imply(t, t)?.value()).toBe("T");
    expect(imply(t, t)?.toBool()).toBe(true);
  });

  test("T -> F === F", () => {
    expect(imply(t, f)?.value()).toBe("F");
    expect(imply(t, f)?.toBool()).toBe(false);
  });

  test("F -> T === T", () => {
    expect(imply(f, t)?.value()).toBe("T");
    expect(imply(f, t)?.toBool()).toBe(true);
  });

  test("F -> F === T", () => {
    expect(imply(f, f)?.value()).toBe("T");
    expect(imply(f, f)?.toBool()).toBe(true);
  });
});