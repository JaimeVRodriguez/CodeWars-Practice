const locateNeedle = (haystack: any[]): string => {
    const index = haystack.indexOf('needle');
    return `found the needle at position ${index}`;
};

const haystackArr = [
    'hay',
    'junk',
    'hay',
    'hay',
    'moreJunk',
    'needle',
    'randomJunk',
];

console.log(locateNeedle(haystackArr)); // found the needle at position 5
