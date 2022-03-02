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

export const totalWickets = (data) => {
    return data.reduce((val, total) => val + total.wickets, 0);
}

export const totalOvers = (data) => {
    return data.reduce((val, total) => val + total.overs, 0);
}

export const bowlingAverage = (data) => {
    const totalRuns = calculateRuns(data);
    const wickets = totalWickets(data);

    return (totalRuns / wickets).toFixed(2);
}

export const bowlingStrikeRate = (data) => {
    const wickets = totalWickets(data);
    const balls = totalOvers(data) * 6;

    return (balls / wickets).toFixed(2);
}

export const bowlingEconomy = (data) => {
    const runs = calculateRuns(data);
    const overs = totalOvers(data);

    return (runs / overs).toFixed(2);
}

export const totalMaidens = (data) => {
    return data.reduce((acc, match) => acc + match.maidens, 0);
}

export const bestFigures = (data) => {
    const highestWickets = Math.max(...data.map(x => x.wickets));
    const filteredList = data.filter(x => x.wickets === highestWickets);

    if (filteredList.length === 1) {
        const match = filteredList[0];
        return `${match.wickets}/${match.runs}`;
    } else {
        filteredList.sort((a, b) => { return a.runs - b.runs});
        const match = filteredList[0];
        return `${match.wickets}/${match.runs}`;
    }
}
