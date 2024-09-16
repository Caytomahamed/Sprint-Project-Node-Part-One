// 1. Create a middleware function that will check if a movie's release date is older than 2000. If it is, return the message "We only accept movies after 2000".
const checkReleaseDate = (req, res, next) => {
    const { release_date } = req.body;
    if (release_date.split(" ").pop() < 2000) {
        return res.status(400).json({
            message: "We only accept movies after 2000"
        });
    }
    next();
};

// 2. Create a middleware function that will check if a star's age is younger than 18. If it is, return the message "We only accept stars over 18".

const checkStarAge = (req, res, next) => {
    const { age } = req.body;
    if (age < 18) {
        return res.status(400).json({
            message: "We only accept stars over 18"
        });
    }
    next();
}

//export 
module.exports = {
    checkReleaseDate,
    checkStarAge
}