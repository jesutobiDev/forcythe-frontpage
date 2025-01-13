export function formatDate(inputDate: string): string {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dateParts = inputDate.split("-");
    const year = dateParts[0];
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);

    const monthName = months[month];
    const daySuffix = getDaySuffix(day);

    return `${monthName} ${day}${daySuffix}, ${year}`;
}

function getDaySuffix(day: number): string {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
