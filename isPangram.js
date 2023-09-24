// keeping a tally using the reduce() method

const votes = ['y','n','y','n','y']

const results = votes.reduce((tally, voteValue) => {
    if (tally[voteValue]) {
        tally[voteValue]++
    } else {
        tally[voteValue] = 1
    }
    return tally
}, {})



