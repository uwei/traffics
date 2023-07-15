
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export function getLocalNumber(num: number): string {
    if(num<100000)
      return num.toLocaleString();
    else if(num<100000000)return Math.floor(num / 1000).toLocaleString() + "T";
    else if(num<100000000000) return Math.floor(num / 1000000).toLocaleString() + "M";
    else Math.floor(num / 1000000000).toLocaleString() + "Mrd";
}