$(document).ready(function() {
    $('#movie-form').on('submit', function(event) {
      event.preventDefault();
      const title = $('#title').val();
      const rating = $('#rating').val();
  
      if (title.length < 2) {
        alert("Title must be at least 2 characters long.");
        return;
      }
  
      if (rating < 0 || rating > 10) {
        alert("Rating must be between 0 and 10.");
        return;
      }
  
      const movieItem = $('<li class="list-group-item movie-item">')
        .append(`<span>${title} - Rating: ${rating}</span>`)
        .append('<button class="btn btn-danger btn-sm remove-btn">Remove</button>');
  
      $('#movies-list').append(movieItem);
  
      $('#title').val('');
      $('#rating').val('');
    });
  
    $('#movies-list').on('click', '.remove-btn', function() {
      $(this).closest('li').remove();
    });
  });
  
