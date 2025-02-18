var locateNeedle = function (haystack) {
    var index = haystack.indexOf('needle');
    return "found the needle at position ".concat(index);
};
var haystackArr = [
    'hay',
    'junk',
    'hay',
    'hay',
    'moreJunk',
    'needle',
    'randomJunk',
];
console.log(locateNeedle(haystackArr)); // found the needle at position 5
