const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');

function template(data) {
  commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <img class="comment-avatar" src="${data.avatar}" />
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}

function appendComment (event) {

  const data = {
    avatar: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/97077054_3139776716044299_4517218736737878016_o.jpg?_nc_cat=105&_nc_sid=110474&_nc_oc=AQnO30xGnUP-cr-6b-0eD5mYMF7nkgxF9knUYJw2egyNBADUVTC5MM5406Z23JHbnBE&_nc_ht=scontent-iad3-1.xx&oh=4567942174b8c4ce516dcc49027cb979&oe=5EFE4077",
    comment: commentInput.value,
    author: "Anonymous"
  };

  event.preventDefault();
  // If the value is nothing just return
  if (commentInput.value.length < 1) return;

  // Insert new template into DOM
  template(data);

  // Reset textrea value
  commentInput.value = "";

  // Save the list to localStorage
  localStorage.setItem('commentListing', commentList.innerHTML);
}

submit.addEventListener('click', appendComment, false)

// Check for saved wishlist items
const saved = localStorage.getItem('commentListing');

// If there are any saved items, update our list
if (saved) {
	commentList.innerHTML = saved;
}