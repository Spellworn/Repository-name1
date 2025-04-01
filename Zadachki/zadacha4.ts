function getHiddenCard (card: string, stars?: number) {
    if (typeof stars !== "undefined") {
        return `${'*'.repeat(stars)}${card.slice(-4)}`;
    }
    return `${'*'.repeat(4)}${card.slice(-4)}`;
}
export default getHiddenCard;
