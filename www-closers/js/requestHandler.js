(function (vrs) {
	function jsonFetch (url, success) {
		var result = null;
		$.ajax({
			url: "api/" + apiConfig + ".json",
			type: 'GET',
			success : success
		})
	};
})(window);