export function toIndustrial(time: number | string): number {
  switch (typeof time) {
    case "string":
      const [h, m] = time.split(":");
      return +h + +(+m / 60).toFixed(2);

    case "number":
      return +(time / 60).toFixed(2);
  }
}

export function toNormal(time: number): string {
  let mins = Math.round(time * 60);
  let hours = 0;
  for (hours = 0; mins >= 60; hours++) {
    mins -= 60;
  }
  return `${hours}:${("0" + mins).slice(-2)}`;
}
