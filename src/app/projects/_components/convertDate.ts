export const convertDate = (originalDateString: Date) => {
    const originalDate = new Date(originalDateString);
    // Format the date to "MMM DD YYYY"
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    // @ts-ignore
    return originalDate.toLocaleDateString('en-US', options);
}