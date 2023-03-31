import fs from 'fs';
const getQuote = (req,res)=>{
    // read the contents of the file
    try{
        fs.readFile('./data/quotes.json', 'utf8', (err, data) => {
            if (err) throw err;

            // parse the JSON data
            const jsonData = JSON.parse(data);

            // generate a random number between 0 and 1643 (inclusive)
            const randomNumber = Math.floor(Math.random() * jsonData.length);

            // use the parsed data
            res.json({
                status: 200,
                quote: {
                    message: jsonData[randomNumber].text,
                    author: jsonData[randomNumber].author
                }
            })
        });
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export default getQuote