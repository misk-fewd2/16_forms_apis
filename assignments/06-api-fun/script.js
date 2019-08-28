console.log("loaded")

$.get('https://dog.ceo/api/breeds/list/all')
  .done(function (response) {
    const dogBreeds = response.message

    $dogBreedsForm = $('#dog-breeds select');

    for (breed in dogBreeds) {
      $dogBreedsForm.append(`<option value=${breed}>${breed}</option>`);
    }

    $dogBreedsForm.on('change', function () {
      let dog = $(this).val()

      $.get(`https://dog.ceo/api/breed/${dog}/images/random`)
        .done(function (response) {
          let imageUrl = response.message

          $('#api-data').html(`<img src=${imageUrl} />`);
        })
    })
  })

$('#get-random-dog').on('click', function () {
  $.get('https://dog.ceo/api/breeds/image/random')
    .done(function (response) {
      const imgUrl = response.message;
      $('#api-data').html(`<img src=${imgUrl} />`);
    })
})

























// fetch('http://api.open-notify.org/iss-now.json')
//   .then((response) => response.json())
//   .then((iss) => { console.log(iss) })

// $.get('http://api.open-notify.org/iss-now.json')
//   .done((iss) => {
//     console.log(iss)
//   })