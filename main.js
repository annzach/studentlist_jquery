//Document Ready
  let $name,$email, $phonnum ,$address,$contactList,$row;
$(document).ready(init);

function init(){
   $name = $('#name');
   $email =$('#emailid');
   $phonnum = $('#phonnum');
   $address = $('#adressid');
   $contactList = $("#contactList");
    $("#contactForm").submit(createNewTask);
    //Delegate Event
    $('#contactList').on('click','.delete',removeContact);
    $('#contactList').on('click','.edit',editContact);
    $('#applyChanges').on('click',applyChanges);

}

//Event Handler
function createNewTask(event){
  event.preventDefault();
  console.log("clicked");
  let name = $name.val();
  let email =$email.val();
  let phonenum =$phonnum.val();
  let address = $address.val();
  $name.val('');
  $email.val('');
  $phonnum.val('');
  $address.val('');
  console.log(name,email,phonenum,address);

  let $row = createNewRow(name,email,phonenum,address);
  $contactList.append($row);
}

function createNewRow(name,email,phonenum,address){
  $row =$('#templateRow').clone();
  $row.children('.name').text(name);
  $row.children('.email').text(email);
  $row.children('.phonenum').text(phonenum);
  $row.children('.address').text(address);
  $row.removeAttr('id');

  return $row;
}

function removeContact(event){
  let $target = $(event.target);
  $target.closest('tr').remove();
 console.log('remove contact',event.target.value)
}


function editContact(event){
  debugger;
  console.log('editpls:')
  let index = $(this).parent().index();
  let name=$(this).parent().parent().find('.name').text()
  let mail= $(this).parent().parent().find('.email').text();
  let ph= $(this).parent().parent().find('.phonenum').text();
  let address= $(this).parent().parent().find('.address').text();
  $('#editModal').modal('show');

  let firstName = $('#Name').val(name);
  let email = $('#email').val(mail);
  let phone = $('#phone').val(ph);
  let addr = $('#address').val(address);

  
}

function applyChanges(event){
  console.log("Apply changes");
  let email = $('#email').val();
  let Name = $('#Name').val();
  let phone = $('#phone').val();
  let address = $('#address').val();
  console.log(email,Name,phone,address);
  $row.children('.name').text(Name);
  $row.children('.email').text(email);
  $row.children('.phonenum').text(phone);
  $row.children('.address').text(address);

}

