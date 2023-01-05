const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true );

        await mongoose.connect(
            "mongodb+srv://Brandao:tZlfFM49IreKej9L@cluster0.ml4fulz.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado ao Banco!");
    }catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;


//