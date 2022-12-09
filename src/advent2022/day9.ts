class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(direction: string, steps: number) {
    if (direction === 'U') {
      this.y = this.y + steps;
    } else if (direction === 'D') {
      this.y = this.y - steps;
    } else if (direction === 'R') {
      this.x = this.x + steps;
    } else {
      this.x = this.x - steps;
    }
  }

  chase(head: Point, memory: Map<string, boolean>, direction: string) {
    if (Math.abs(this.x - head.x) > 1 || Math.abs(this.y - head.y) > 1) {
      if (this.x === head.x) {
        for (let i = 1; i < Math.abs(this.y - head.y); i++) {
          if (direction === 'D') {
            memory.set(`${this.x}=${this.y - i}`, true);
          } else {
            memory.set(`${this.x}=${this.y + i}`, true);
          }
        }
        this.move(direction, Math.abs(this.y - head.y) - 1);
      } else if (this.y === head.y) {
        for (let i = 1; i < Math.abs(this.x - head.x); i++) {
          if (direction === 'R') {
            memory.set(`${this.x + i}=${this.y}`, true);
          } else {
            memory.set(`${this.x - i}=${this.y}`, true);
          }
        }
        this.move(direction, Math.abs(this.x - head.x) - 1);
      } else {
        this.x += Math.abs(this.x - head.x) / (head.x - this.x);
        this.y += Math.abs(this.y - head.y) / (head.y - this.y);
        memory.set(`${this.x}=${this.y}`, true);
        this.chase(head, memory, direction);
      }
    }
  }

  chase2(head: Point) {
    if (Math.abs(this.x - head.x) > 1 || Math.abs(this.y - head.y) > 1) {
      if (this.x === head.x) {
        this.y += Math.abs(this.y - head.y) / (head.y - this.y);
      } else if (this.y === head.y) {
        this.x += Math.abs(this.x - head.x) / (head.x - this.x);
      } else {
        this.x += Math.abs(this.x - head.x) / (head.x - this.x);
        this.y += Math.abs(this.y - head.y) / (head.y - this.y);
      }
    }
  }
}

const solution = (input: string): number => {
  const lines = input.split('\n');
  const map = new Map<string, boolean>();

  const head = new Point(0, 0);
  const tail = new Point(0, 0);
  map.set('0=0', true);
  for (const line of lines) {
    const args = line.split(' ');
    head.move(args[0], parseInt(args[1]));
    tail.chase(head, map, args[0]);
  }
  return map.size;
};

const LENGTH = 10;

const solution2 = (input: string): number => {
  const points = Array.from({ length: LENGTH }, (_) => new Point(0, 0));
  const lines = input.split('\n');
  const map = new Map<string, boolean>();
  map.set('0=0', true);

  for (const line of lines) {
    const args = line.split(' ');
    for (let j = 0; j < parseInt(args[1]); j++) {
      points[0].move(args[0], 1);
      for (let i = 1; i < LENGTH; i++) {
        points[i].chase2(points[i - 1]);
      }
      map.set(`${points[LENGTH - 1].x}=${points[LENGTH - 1].y}`, true);
    }
  }
  return map.size;
};

const printMap = (map: Map<string, boolean>) => {
  for (let i = 0; i < 60; i++) {
    let s = '';
    for (let j = 0; j < 60; j++) {
      if (i === 30 && j === 30) {
        s = s.concat('s');
      } else if (map.get(`${i - 30}=${j - 30}`)) {
        s = s.concat('#');
      } else {
        s = s.concat('.');
      }
    }
    console.log(s);
  }
};
