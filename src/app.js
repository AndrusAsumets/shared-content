$.get('manifest.json', function(data) {
	var manifest = JSON.parse(data)
	
	for (i = 0; i < manifest.length; i++) {
		var fileName = manifest[i].fileName
		
		$.get(fileName, function(data) {
			var file = JSON.parse(data)
			
			for (i = 0; i < file.length; i++) {
				var item = file[i]
				
				console.log(item)
			}
		})
	}
})