function disableItems() {
	//Disable everything inside a reptile, nut not the carrusel
	var itemsToDisable =
		" tr.dbItem > td > div.input-group > input.form-control,tr.dbItem >  td > select.form-select,tr.dbItem > td > div.boton-fotos  >button ,tr.dbItem > td > div.boton-fotos > input";
	$(itemsToDisable).prop("disabled", "disabled");
}

disableItems();

function clearInputs() {
	$(
		"tr >  td > div.input-group > input.form-control , td > div.px-2 > input"
	).val("");
}

clearInputs();

function uncheckButtons() {
	if ($(":checked")) {
		$(":checked").prop("checked", false);
	}
}

uncheckButtons();
