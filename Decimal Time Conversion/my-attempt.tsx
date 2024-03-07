export function toIndustrial(time: number|string): number {
//   1h => 100mn => 10000s
//  1dmn => 36s === 0.01
  var decimalHourTime;
  if(typeof time === "string") {
    decimalHourTime = ;
  } else if(typeof time === "number") {
    decimalHourTime = time / 60 * 100;
  }
  return decimalHourTime;
}

export function toNormal(time: number): string {
  return "I am here";
}
