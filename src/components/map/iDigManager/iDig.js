

const IDig = {
    getGenus(timePeriod, limit) {
        return fetch(`https://api.epandda.org/occurrences?terms=${timePeriod}&chronostratigraphy=${timePeriod}&returnMedia=true&format=JSON&limit=${limit}`).then(result => result.json())
    }
}

export default IDig