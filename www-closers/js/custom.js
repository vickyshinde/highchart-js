$(function () {

	var jsonURLChart1 = 'adverseEffect';		

	var funChartOne = $.ajax({
		url: "api/" + jsonURLChart1 + ".json",
		type: "GET",
		success: function(data){
			// Chart 1 //
			var processedJsonChart1 = new Array();   
			   for (i = 0; i < data.result.length; i++){
			       processedJsonChart1.push([data.result[i].name, data.result[i].count]);
			   }
			   console.log(processedJsonChart1);
				$('#chart1').highcharts({
				    chart: {
				        type: 'bar'
				    },
				    title: {
				        text: 'My 1st Chart'
				    },
				    subtitle: {
				        text: 'Source: <a href="https://webonise.com">webonise.com</a>'
				    },
				    xAxis: {
				        categories: []
				    },
				    yAxis: {
				        min: 0,
				        title: {
				            text: 'Population (millions)',
				            align: 'high'
				        },
				        labels: {
				            overflow: 'justify'
				        }
				    },
				    tooltip: {
				        valueSuffix: ' millions'
				    },
				    plotOptions: {
				        bar: {
				            dataLabels: {
				                enabled: true
				            }
				        },
	                    series: {
	                        cursor: 'pointer',
	                        point: {
	                            events: {
	                                click: function () {	                                  
	                                   funChartTwo(this.name);
	                                }
	                            }
	                        }
	                    }
	                },
				    legend: {
				        layout: 'vertical',
				        align: 'right',
				        verticalAlign: 'top',
				        x: -40,
				        y: 80,
				        floating: true,
				        borderWidth: 1,
				        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
				        shadow: true
				    },
				    credits: {
				        enabled: false
				    },
				    series: [{
				        name: 'Subjects',
				        data: processedJsonChart1
				    }]
				});
			},
		error: function(){
			console.log("data is not found")
		}
	});
});	

var funChartTwo = function(category){
	var jsonURLChart2 = category.toLowerCase() + 'CausingDrug';
	$.ajax({
		url: "api/" + jsonURLChart2 + ".json",
		type: "GET",
		success: function(data){
			// Chart 1 //
			var processedJsonChart2 = new Array();   
			   for (i = 0; i < data.result.length; i++){
	              processedJsonChart2.push([data.result[i].name, data.result[i].count]);
	          }
		    	$('#chart2').highcharts({
			        chart: {
			            type: 'bar'
			        },
			        title: {
			            text: 'My 2nd Chart'
			        },
			        subtitle: {
			            text: 'Source: <a href="https://webonise.com">webonise.com</a>'
			        },
			        xAxis: {
			            categories: []
			        },
			        yAxis: {
		            min: 0,
			            title: {
			                text: 'Population (millions)',
			                align: 'high'
			            },
			            labels: {
			                overflow: 'justify'
			            }
			        },
			        tooltip: {
			            valueSuffix: ' millions'
			        },
			        plotOptions: {
				        bar: {
				            dataLabels: {
				                enabled: true
				            }
				        },
	                   series: {
	                       cursor: 'pointer',
	                       point: {
	                           events: {
	                               click: function () {
	                                  funChartThree(this.name);
	                               }
	                           }
	                       }
	                   }
	               },
			        legend: {
			            layout: 'vertical',
			            align: 'right',
			            verticalAlign: 'top',
			            x: -40,
			            y: 80,
			            floating: true,
			            borderWidth: 1,
			            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			            shadow: true
			        },
			        credits: {
			            enabled: false
			        },
			        series: [{
		                name: 'Subjects',
		                data: processedJsonChart2
		            }]
			    });
			},
		error: function(){
			alert("data is not found")
		}
	});
};

var funChartThree = function(category){
	var jsonURLChart3 = category.toLowerCase() + 'GenderDistribution';
	$.ajax({
		url: "api/" + jsonURLChart3 + ".json",
		type: "GET",
		success: function(data){
			// Chart 1 //
			var processedJsonChart3 = new Array();   
			   for (i = 0; i < data.result.length; i++){
	              processedJsonChart3.push([data.result[i].name, data.result[i].y]);
	          }
	    		$('#chart3').highcharts({
	    		    chart: {
	    		        plotBackgroundColor: null,
	    		        plotBorderWidth: null,
	    		        plotShadow: false,
	    		        type: 'pie'
	    		    },
	    	        title: {
	    	            text: 'My 3rd Chart'
	    	        },
	    	        subtitle: {
	    	            text: 'Source: <a href="https://webonise.com">webonise.com</a>'
	    	        },
	    		    plotOptions: {
	    		        pie: {
	    		            allowPointSelect: true,
	    		            cursor: 'pointer',
	    		            dataLabels: {
	    		                enabled: false
	    		            },
	    		            showInLegend: true
	    		        }
	    		    },
	    		    series: [{
	    		        name: 'Subjects',
	    		        data: processedJsonChart3
	    		    }]
	    		});
			},
		error: function(){
			alert("data is not found")
		}
	});
};