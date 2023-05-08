//code borrow from lesson 5 activity 10
var giftFormEl = $('#gift-form');
var giftListEl = $('#gift-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var giftItem = $('input[name="gift-input"]').val();

  if (!giftItem) {
    console.log('No gift item filled out in form!');
    return;
  }

  var giftListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  giftListItemEl.text(giftItem);
  
  giftListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  giftListEl.append(giftListItemEl);

  $('input[name="gift-input"]').val('');
}

function handleRemoveItem(event) {
  var btnClicked = $(event.target);

  btnClicked.parent('li').remove();
}

giftListEl.on('click', '.delete-item-btn', handleRemoveItem);
giftFormEl.on('submit', handleFormSubmit);
