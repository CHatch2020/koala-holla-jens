console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();

  // Adds a click listener to detect when delete button is clicked.
  // TODO make sure to add class delete-btn, to the remove button.
  $('#addButton').on('click', saveKoala)
  $('body').on('click', '.delete-btn', deleteKoala);
}); // end doc ready

// clear koalaInputs
function clearInputs(){
  $('#nameIn').val('');
  $('#ageIn').val('');
  $('#genderIn').val('');
  $('#readyForTransferIn').val('');
  $('#notesIn').val('');
}

// clear koalaInputs
function clearInputs(){
  $('#nameIn').val('');
  $('#ageIn').val('');
  $('#genderIn').val('');
  $('#readyForTransferIn').val('');
  $('#notesIn').val('');
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  let newKoala = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    readyToTransfer: $('#readyToTransferIn').val(),
    notes: $('#notesIn').val()
  }
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: newKoala
  }).then((response) => {
    console.log('POST /koalas succeeded')
    clearInputs();
    getKoalas();
  });

}

function deleteKoala( newKoala ){
  console.log( 'in deleteKoala');
  const koalaId = $(this).data('id');
  // ajax call to server to delete koalas
  $.ajax({
    type: 'DELETE',
    url: `/koalas/${koalaId}`
  }).then(function(response) {
    console.log('response', response);
    // TODO refreshKoalas(); 
  }).catch(function(error) {
    console.log('error: ', error);
  });
}