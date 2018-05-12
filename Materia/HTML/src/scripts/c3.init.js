jQuery(function() {
	"use strict";

	function initC3Chart() {
		// line chart
		c3.generate({
			bindto: "#c3chartline",
			data: {
				columns: [
					['data1', 30, 200, 100, 200, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				]
			}
		});

		// spline chart
		c3.generate({
			bindto: "#c3chartspline",
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 100, 140, 200, 150, 50],
					['data3', 50, 20, 10, 40, 15, 25]
				],
				type: 'spline'
			}
		});

		// step chart 
		c3.generate({
			bindto: "#c3chartstep",
			data: {
				columns: [
					['data1', 300, 350, 300, 0, 0, 100],
					['data2', 130, 100, 140, 200, 150, 50]
				],
				types: {
					data1: 'step',
					data2: 'area-step'
				}
			}
		});

		// bar chart
		c3.generate({
			bindto: "#c3chartbar",
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 100, 140, 200, 150, 50]
				],
				type: 'bar'
			},
			bar: {
				width: {
		            ratio: 0.5 // this makes bar width 50% of length between ticks
		        }
		        // or
		        //width: 100 // this makes bar width 100px
		    }
		});

		// area chart
		c3.generate({
			bindto: "#c3chartarea",
			data: {
				columns: [
		            ['data1', 300, 350, 300, 0, 0, 120],
		            ['data2', 130, 100, 140, 200, 150, 50]
		        ],
		        types: {
		            data1: 'area-spline',
		            data2: 'area-spline'
		            // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
		        },
		        groups: [['data1', 'data2']]
			}
		});


		// stacked bar chart
		c3.generate({
			bindto: "#c3chartstackedbar",
			data: {
				columns: [
					['data1', -30, 200, 200, 400, -150, 250],
					['data2', 130, 100, -100, 200, -150, 50],
					['data3', -230, 200, 200, -300, 250, 250]
				],
				type: 'bar',
				groups: [
					['data1', 'data2']
				]
			},
			grid: {
				y: {
					lines: [{value:0}]
				}
			}
		});

		// pie chart
		c3.generate({
			bindto: "#c3chartpie",
			data: {
				columns: [
		            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
		            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
		            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
		        ],
		        type: "pie"
			}
		});

		// donut chart
		c3.generate({
			bindto: "#c3chartdonut",
			data: {
				columns: [
		            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
		            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
		            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
		        ],
		        type: "donut"
			}
		});

		// additions : easy pie chart options
		$("#easypiechartDemo").easyPieChart({
			size: 180,
			lineWidth: 12,
			lineCap: "square",
			barColor: "#E91E63"
		})


	}


	function _init() {
		initC3Chart();

		// resize charts on nav-toggle
		$(".site-head").find(".nav-trigger").on("click touchstart", function() {
			$(this).toggleClass("nav-expand");
			if(this == ".nav-wrap") {
				$(this).toggleClass("nav-offcanvas");
			}
			setTimeout(function() {
				initC3Chart();
			})

		});
	}


	_init();

})