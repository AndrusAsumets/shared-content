$.get('manifest.json', function(manifest) {
	for (i = 0; i < manifest.length; i++) {
		var fileName = manifest[i].fileName
		
		fetchContent(fileName, function(fileName, file) {
			var username = fileName.split('.')[0]
			
			for (i = 0; i < file.length; i++) {
				var item = file[i].item
				
				$('.app').append(username + ': ' + item)
			}
		})
	}
})

function fetchContent(fileName, callback) {
	$.get('content/' + fileName, function(file) {
		callback(null, fileName, file)
	})	
}