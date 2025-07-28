export const getMonthDayString = (date: Date) => {
    // Helper to add ordinal suffix to day
    function getOrdinalSuffix(day: number) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    return `${month} ${day}${getOrdinalSuffix(day)}`;
};
