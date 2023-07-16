
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export function getLocalNumber(num: number): string {
    if(num<10000)
      return num.toLocaleString();
    else if(num<10000000)return Math.floor(num / 1000).toLocaleString() + "T";
    else if(num<10000000000) return Math.floor(num / 1000000).toLocaleString() + "M";
    else if(num<10000000000000) return Math.floor(num / 1000000000).toLocaleString() + "Mrd";
    else return Math.floor(num / 1000000000000).toLocaleString() + "Bil";
}