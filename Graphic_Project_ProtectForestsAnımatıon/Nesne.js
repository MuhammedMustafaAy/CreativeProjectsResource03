class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
  }
  show() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
  branchA() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 4); // Düzgün dallanma açısı
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  }
  branchB() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4); // Düzgün dallanma açısı
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  }
}
