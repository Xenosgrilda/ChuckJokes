class Jokes {
    static async getJoke(num){
        num === '' ? num = 1 : null;

        try {
            const data = await fetch(`http://api.icndb.com/jokes/random/${num}`);
            return await data.json();

        }catch (err) {
            throw new Error("The request couldn't be made, Tip: Check the url parameters");
        }
    }
}
