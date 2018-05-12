jQuery(function() {
	"use strict";

	// select2 plugin
	function initSelect2() {
		// single select
		$("#personSelect").select2();

		// with optgroup
		$("#stateSelect").select2();

		// multi select
		$("#multiSelect").select2();

		// templating select
		$("#templatingSelect").select2({
			templateResult: function(state) {
				if(!state.id) return state.text;
				return $('<span><img src="images/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" style="margin-right: 3px; height: 12px; width: 12px;"/> ' + state.text + '</span>');
			},
			templateSelection: function(state) {
				return $('<span><img src="images/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" style="margin-right: 3px; height: 12px; width: 12px;"/> ' + state.text + '</span>');
			}
		});

	}


	// colorpicker plugin
	function initColorpicker() {
		$("#colorpickerDemo").colorpicker();

		$("#colorpickerDemo1").colorpicker();
	}

	// text editor plugin
	function initTextEditor() {
		$("#textEditorDemo").summernote({
			height: 300
		});
	}

	// bootstrap range slider plugin
	function initRangeSlider() {
		var ids = ["#sliderEx1", "#sliderEx2", "#sliderEx3", "#sliderEx4", "#sliderEx5", "#sliderEx6", "#sliderEx7"];
		// example 1
		ids.forEach(function(id) {
			$(id).slider();
		})

	}

	// datepicker plugin
	function initDatepicker() {
		$("#datepickerDemo").datepicker({
			autoclose: true
		});

		$("#datepickerDemo1").datepicker({
			todayHighlight: true
		});
	}


	function _init() {
		initSelect2();
		initColorpicker();
		initTextEditor();
		initRangeSlider();
		initDatepicker();
	}
	_init();

})