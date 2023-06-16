// Hello, world!
// Hello, world! I have a lot to say, so much that it will take multiple
// lines of text. Therefore, I will start each line with // to denote it
// as part of a multi-line comment.
import Debug "mo:base/Debug";
import Char "mo:base/Char";
actor Counter {

  stable var value = 0;

  func add(x : Nat, y :  Nat) : Nat {
    return x + y // here we are adding two values together
  };

  func multiply(x : Nat, y : Nat) : Nat {
    // here we are multiplying x by y
    return x * y
  };

  public func counter() : async Nat {
    value += 1;
    return value;
  };

  public func reset() : async () {
    value := 0;
  };

  let A = "A";
  let B = "B";
  let X = "A";

  if (A == B) {
      Debug.print("A and B are the same!")
  } else {
      Debug.print("A and B are different!")
  };

  if (A == X) {
      Debug.print("A and X are the same!")
  } else {
      Debug.print("A and X are different!")
  };

  Debug.print("Here is a double quote -> \" <-");
};