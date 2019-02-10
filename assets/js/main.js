$(document).ready(function() {
	var tmp_storage = {};
	var payloads_html = "";

	// Iterate through the payloads and set up the 
	for(var i = 0; i < payloads.length; i++) {
		payload = payloads[i];

		payload_html = `<a class="dropdown-item payload-button" payload_id="${payload["id"]}"  href="#">${payload["name"]}</a>`
		payloads_html += payload_html + "\n";
		tmp_storage[payload["id"]] = payload["code"];
	}

	console.log(tmp_storage);
	$("#payload-items").html(payloads_html);

	$(".payload-button").click(function() {
		var id = $(this).attr("payload_id");
		var code = tmp_storage[id];

		$("#script-area").val(code);
	})

	$('#launch-payload').click(function() {
		// I don't know how it calls to the api, but this is where you would do it.
		var payload = $("#script-area").val();
		$("#launch-payload").html(`Running...`);
		console.log(payload);
	});
});






