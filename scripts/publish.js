var ghpages = require('gh-pages')

ghpages.publish('./', 
	function(err) {
		if (err) console.log(err)
		else console.log("Successfully published all the content of shared-content to GitHub's gh-pages branch.")
	}
)