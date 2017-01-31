$(document).ready(function () {
	// Se botão de visualizar for clicado
	$('#btReceitaVisualizar').click(function(){
		//Pego valores das datas
		var dataI = $('#receitaDataI').val();
		var dataF = $('#receitaDataF').val();

		//Código do chart 
		google.charts.load('current', {packages:['corechart', 'table', 'gauge', 'controls']});
		google.charts.setOnLoadCallback(drawChartRangeFilter);

		  function drawChartRangeFilter() {

		    var dashboard = new google.visualization.Dashboard(
		        document.getElementById('chartRangeFilter_dashboard_div'));

		    var control = new google.visualization.ControlWrapper({
		      'controlType': 'ChartRangeFilter',
		      'containerId': 'chartRangeFilter_control_div',
		      'options': {
		        // Filter by the date axis.
		        'filterColumnIndex': 0,
		        'ui': {
		          'chartType': 'LineChart',
		          'chartOptions': {
		            'chartArea': {'width': '90%'},
		            'hAxis': {'baselineColor': 'none'}
		          },
		          // Display a single series that shows the closing value of the stock.
		          // Thus, this view has two columns: the date (axis) and the stock value (line series).
		          'chartView': {
		            'columns': [0, 3]
		          },
		          // 1 day in milliseconds = 24 * 60 * 60 * 1000 = 86,400,000
		          'minRangeSize': 86400000
		        }
		      },
		      // Initial range: 2012-02-09 to 2012-03-20.
		      'state': {'range': {'start': new Date(dataI), 'end': new Date(dataF)}}
		    });

		    var chart = new google.visualization.ChartWrapper({
		      'chartType': 'ColumnChart',
		      'containerId': 'chartRangeFilter_chart_div',
		      'options': {
		        // Use the same chart area width as the control for axis alignment.
		        'chartArea': {'height': '80%', 'width': '90%'},
		        'hAxis': {'slantedText': false},
		        'vAxis': {'viewWindow': {'min': 0, 'max': 2000}},
		        'legend': {'position': 'none'}
		      },
		      // Convert the first column from 'date' to 'string'.
		      'view': {
		        'columns': [
		          {
		            'calc': function(dataTable, rowIndex) {
		              return dataTable.getFormattedValue(rowIndex, 0);
		            },
		            'type': 'string'
		          }, 1]
		      }
		    });

		    var data = new google.visualization.DataTable();
		    data.addColumn('date', 'Date');
		    data.addColumn('number', 'Stock low');
		    data.addColumn('number', 'Stock open');
		    data.addColumn('number', 'Stock close');
		    data.addColumn('number', 'Stock high');

		    // Create random stock values, just like it works in reality.
		    var open, close = 300;
		    var low, high;
		    for (var day = 1; day < 121; ++day) {
		      var change = (Math.sin(day / 2.5 + Math.PI) + Math.sin(day / 3) - Math.cos(day * 0.7)) * 150;
		      change = change >= 0 ? change + 10 : change - 10;
		      open = close;
		      close = Math.max(50, open + change);
		      low = Math.min(open, close) - (Math.cos(day * 1.7) + 1) * 15;
		      low = Math.max(0, low);
		      high = Math.max(open, close) + (Math.cos(day * 1.3) + 1) * 15;
		      var date = new Date(2012, 0 ,day);
		      data.addRow([date, Math.round(low), Math.round(open), Math.round(close), Math.round(high)]);
		    }

		    dashboard.bind(control, chart);
		    dashboard.draw(data);
		  }

	});

	//SCRIPT PARA RANGE DO GRÁFICO C
	$('#BtVolumeVisualizar').click(function(){


		var dataI = $('#VolumeDataI').val();
		var dataF = $('#VolumeDataF').val();

		google.charts.load('current', {packages:['corechart', 'line', 'gauge', 'controls']});
		google.charts.setOnLoadCallback(drawChartRangeFilter);

		function drawChartRangeFilter() {

		    var dashboard = new google.visualization.Dashboard(
		        document.getElementById('chartRangeFilter_dashboard_div2'));

		    var control = new google.visualization.ControlWrapper({
		      'controlType': 'ChartRangeFilter',
		      'containerId': 'chartRangeFilter_control_div2',
		      'options': {
		        // Filter by the date axis.
		        'filterColumnIndex': 0,
		        'ui': {
		          'chartType': 'LineChart',
		          'chartOptions': {
		            'chartArea': {'width': '90%'},
		            'hAxis': {'baselineColor': 'none'}
		          },
		          // Display a single series that shows the closing value of the stock.
		          // Thus, this view has two columns: the date (axis) and the stock value (line series).
		          'chartView': {
		            'columns': [0, 3]
		          },
		          // 1 day in milliseconds = 24 * 60 * 60 * 1000 = 86,400,000
		          'minRangeSize': 86400000
		        }
		      },
		      // Initial range: 2012-02-09 to 2012-03-20.
		      'state': {'range': {'start': new Date(dataI), 'end': new Date(dataF)}}
		    });

		    var chart = new google.visualization.ChartWrapper({
		      'chartType': 'LineChart',
		      'containerId': 'chartRangeFilter_chart_div2',
		      'options': {
		        // Use the same chart area width as the control for axis alignment.
		        'chartArea': {'height': '80%', 'width': '90%'},
		        'hAxis': {'slantedText': false},
		        'vAxis': {'viewWindow': {'min': 0, 'max': 2000}},
		        'legend': {'position': 'none'}
		      },
		      // Convert the first column from 'date' to 'string'.
		      'view': {
		        'columns': [
		          {
		            'calc': function(dataTable, rowIndex) {
		              return dataTable.getFormattedValue(rowIndex, 0);
		            },
		            'type': 'string'
		          }, 1]
		      }
		    });

		    var data = new google.visualization.DataTable();
		    data.addColumn('date', 'Date');
		    data.addColumn('number', 'Stock low');
		    data.addColumn('number', 'Stock open');
		    data.addColumn('number', 'Stock close');
		    data.addColumn('number', 'Stock high');

		    // Create random stock values, just like it works in reality.
		    var open, close = 300;
		    var low, high;
		    for (var day = 1; day < 121; ++day) {
		      var change = (Math.sin(day / 2.5 + Math.PI) + Math.sin(day / 3) - Math.cos(day * 0.7)) * 150;
		      change = change >= 0 ? change + 10 : change - 10;
		      open = close;
		      close = Math.max(50, open + change);
		      low = Math.min(open, close) - (Math.cos(day * 1.7) + 1) * 15;
		      low = Math.max(0, low);
		      high = Math.max(open, close) + (Math.cos(day * 1.3) + 1) * 15;
		      var date = new Date(2012, 0 ,day);
		      data.addRow([date, Math.round(low), Math.round(open), Math.round(close), Math.round(high)]);
		    }

		    dashboard.bind(control, chart);
		    dashboard.draw(data);
	 	}
	});
})