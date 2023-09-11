export const getClosestBGColor = (el: HTMLElement): string | null => {
    const color = getComputedStyle(el).backgroundColor;

    if (color === 'rgba(0, 0, 0, 0)') {
        if (!el.parentElement) return null;
        return getClosestBGColor(el.parentElement);
    }
    return color;
};
