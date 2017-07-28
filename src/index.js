const express = require('express');
const PORT = 3000 || process.ENV.PORT;
let app = express();

app.listen(PORT, (err) => {
	if(err){
		console.log(`opss, this need your attention ${err}`);
	}else{
		console.log(`app is now running on http://localhost:${PORT}`);
	}
});
