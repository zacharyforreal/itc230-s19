let movies = [
    {title:"No Country for Old Men",releasedate:"2007",IMDBRating:"8.1"},
    {title:"Manchester by the Sea",releasedate:"2016",IMDBRating:"7.8"},
    {title:"Three Billboards Outside Ebbing, Missouri",releasedate:"2008",IMDBRating:"8.2"},
    {title:"The Hateful Eight",releasedate:"2015",IMDBRating:"7.8"},
    {title:"The Mule",releasedate:"2018",IMDBRating:"7.1"},
    {title:"workPlease",releasedate:"2018",IMDBRating:"7.1"}
];

// THIS prints out ALL contents of the collection
exports.getAll = () => {
    return movieCollections;
}

//This retrieves the movie that use searches for
exports.get = (title) => {
    console.log(title);
    return movieCollections.find((item) => {
    return item.title == title;
    });
};


//This deletes the selected movie
exports.delete = (title) => {
    let foundIndex = movieCollections.findIndex((title) => {
// return movie.title === 'The Mule';
//array.splice(start, deleteCount[, title[, releasedate[,IMDBRating]]]
    movieCollections.splice(foundIndex, 1); // removes 5nd item in the movieCollections array
});
console.log(foundIndex);
//     var deleteItem = movieCollections.findItem((movies) => {
//     if (deleteItem >= -1) {
//     movieCollections.splice(deleteItem, 1);
//     return movieCollections;}
//     else {
//         return NOT_FOUND;
//     }
// });
}

//This adds movie to the collection
exports.add = () => {
    const oldLength = movieCollections.length;

    return {added: oldLength !== movieCollections.length, 
            total: movieCollections.length };
};