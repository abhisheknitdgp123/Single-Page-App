MyApp.controller('MyCtrl', function ($scope) {

//Define the `myDataSource` scope variable.  
$scope.myDataSource = {
   chart: {
       caption: "Harry's SuperMart",
       subCaption: "Top 5 stores in last month by revenue",
       numberPrefix: "$",
       theme: "fint"
   },
   data:[{
       label: "Bakersfield Central",
       value: "880000"
   },
   {
       label: "Garden Groove harbour",
       value: "730000"
   },
   {
       label: "Los Angeles Topanga",
       value: "590000"
   },
   {
       label: "Compton-Rancho Dom",
       value: "520000"
   },
   {
       label: "Daly City Serramonte",
       value: "330000"
   }]
};
});
