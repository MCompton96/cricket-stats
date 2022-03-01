export const calculateRuns = (data) => {
    return data.reduce((val, total) => val + total.runs, 0);
}

export const calculateCenturies = (data) => {
    let total = 0;
    data.forEach(game => {
        if (game.runss > 99) {
            total++
        }
    });

    return total;
}

export const calculateHalfCentures = (data) => {
    let total = 0;
    data.forEach(game => {
        if (game.runs > 50 && game.runs < 100) {
            total++
        }
    });
    return total;
}

export const calculateDucks = (data) => {
    let total = 0;
    data.forEach(game => {
        if (game.runs === 0) {
            total++
        }
    });
    return total;
}

export const calcTotalBoundaries = (data) => {
    return data.reduce((val, total) => val + total.boundaries, 0);
}

export const calcTotalSixes = (data) => {
    return data.reduce((val, total) => val + total.sixes, 0);
}

export const totalNotOuts = (data) => {
    return data.filter(x => !x.out).length;
}

export const calculateAverage = (data) => {
    return (calculateRuns(data) / (data.length - totalNotOuts(data)))
    .toFixed(2);
}

export const calcHighScore = (data) => {
    return Math.max(...data.map(x => x.runs));
}