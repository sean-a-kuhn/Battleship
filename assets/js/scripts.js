$(document).ready(function() {
   
   // Populate gameBoard div with cells, 10 rows by 10 columns
   for (let i=0; i<10; i++) {
      for (let j=0; j<10; j++) {

      var addCell = $('<div class="cell"></div>');

      $(".gridContent").append(addCell);

   // Assign numerical id to each gridBox.
      let cellId = i + "-" + j;
      addCell.attr('id', cellId);
      }
   }


});
