export const arrayDifference = <T>(prevArr: T[], newArr: T[]) => {
    return {
        deleted: prevArr.filter((v) => !newArr.includes(v)),
        added: newArr.filter((v) => !prevArr.includes(v)),
    };
};
