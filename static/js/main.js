// $(document).ready(function(){

//     var $reports = $('#reports'); 

//     $.ajax({
//         type:'GET',
//         url:'https://covid-api.com/api/reports?region_name=US',
//         success: function(reports){
         
//           $.each(reports.data, function(i, report){
//             console.log(report.confirmed);
//             // $reports.append('<tr><td>' + report.recovered + '</td><td>' + report.confirmed + '</td><td>' + report.active + '</td><td> ' + report.recovered + '</td><td>' + report.deaths + '</td></tr>');     
//           });
//         }
//     });
// })

var $reports = $('#reports'); 

var active = $('#active')

var recovery = $('#recovery')

var death = $('#death')

var total = $('#total')

var SumActive = 0;

var SumRecovery = 0;

var SumDeath = 0;

var SumTotal = 0;

async function fetchdata(){
     response = await fetch('https://covid-api.com/api/reports');
     let reports = await response.json();
               $.each(reports.data, function(i, report){
            //console.log(report.confirmed);
            
            SumActive += report.active;
            SumTotal += report.confirmed;
            SumDeath += report.deaths;
            SumRecovery += report.recovered;

            $reports.append('<tr><td>' + report.region.name + '</td><td>' + report.confirmed + '</td><td>' + report.active + '</td><td> ' + report.recovered + '</td><td>' + report.deaths + '</td></tr>');     
          });
  
          active.append(SumActive)
          total.append(SumTotal)
          death.append(SumDeath)
          recovery.append(SumRecovery)

          //console.log('sum is '+SumActive)
}

fetchdata();
