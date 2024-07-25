const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect("mongodb://localhost:27017/wanderlust");
}

const initDB = async () => {
      await Listing.deleteMany({});
	  initData.data = 
	  initData.data.map((obj)=> ({...obj,owner:"6699f8def8e5b67da494dd82"}));
      await Listing.insertMany(initData.data);
      console.log("Data was initialise");
};

initDB();
