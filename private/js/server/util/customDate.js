export function stringToDate(date) {
    const targetDate = new Date(date);
    const arrayDate = `${targetDate.getFullYear().toString()}-${(targetDate.getMonth() + 1).toString()}-${targetDate.getDate().toString()}`;
    return arrayDate;
}
