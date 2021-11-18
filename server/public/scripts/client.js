console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();

  // Adds a click listener to detect when delete button is clicked.

    // TODO make sure to add class delete-btn, to the remove button.
  $('#viewKoalas').on('click', '.delete-btn', deleteKoala);
  $('#viewKoalas').on('click', '.update-btn', updateKoala);

  // TODO make sure to add class delete-btn, to the remove button.
  $('#addButton').on('click', saveKoala)

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
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then((response) => {
    $("#viewKoalas").empty();
    console.log("GET /koalas response", response);
    for (let koala of response) {
      $('#viewKoalas').append(`
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.readyForTransfer}</td>
        <td>${koala.notes}</td>
        <td>
          <button class="ready-for-transfer-btn">Ready for Transfer</button>
        </td>
        <td>
          <button class="delete-btn">delete</button>
        </td>
      </tr>
      `);
    }
  });
}

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
}; // end deleteKoala

// update the inputs
function updateKoala(){
  const update = $(this).data('id');
  $.ajax({
    type: 'PUT',
    url: `/koalas/${update}`
  }).then((res) => {
    console.log(res);
    //will be the get function
  }).catch((err) => {
    console.log(err);
  })
}; // end updateKoala