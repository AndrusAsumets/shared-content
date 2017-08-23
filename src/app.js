$.get('manifest.json', function(manifest) {
	for (i = 0; i < manifest.length; i++) {
		var fileName = manifest[i].fileName
		
		$.get(fileName, function(file) {
			for (i = 0; i < file.length; i++) {
				var item = file[i]
				
				console.log(item)
			}
		})
	}
})