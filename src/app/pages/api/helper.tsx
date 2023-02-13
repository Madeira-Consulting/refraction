export const fTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    //truncate seconds to 2 decimal places
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds.toFixed(0)}`;
};

export const fDate = (d: string) => {
    const date = new Date(d);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = day + "." + month + "." + year;
    return formattedDate;
};

//format numbers to add thousand seperator
export const fNumber = (n: number) => {
    return n?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
