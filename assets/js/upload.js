function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log('RESULT', reader.result)
    $(element).next('input').val(reader.result)
  }
  reader.readAsDataURL(file);
}
$(function () {
  console.log('ready')

  $('.send__post').click(function (e) {
    e.preventDefault()
    
    // get values
    let title = $('input[name="title__post"]').val();
    let content = $('textarea[name="content__post"]').val();
    let date = getDate();
    let imgDataSquare = $('input[name="img__large"]').val();
    let imgDataLarge = $('input[name="img__square"]').val();
    let minute = $('input[name="minutes"]').val();
    let category = $('select[name="category__post"]').val();
    let author = $('input[name="author__post"]').val();
    let group = $('input[name="group__post"]').val();
    let blockDisplay = $('select[name="blockDisplay__post"]').val();
    let imgDataNetwork = $('input[name="img__network"]').val();


    var objectPost = {
      title,
      content,
      date,
      imgDataSquare,
      imgDataLarge,
      minute,
      category,
      author,
      group,
      blockDisplay,
      imgDataNetwork
    }
    uploadPost(objectPost)
    
  })

  const uploadPost = (userData) => {
    $.ajax({
      url: "https://blog-6g.firebaseio.com/team1.json",
      method: "POST",
      data: JSON.stringify(userData),
      success: (response) => {
        console.log(response);
        //printUsers();
      }
    });
  }

  // var dataUpload = {
  //   title: "some title",
  //   content: "some content",
  //   date: "some date",
  //   imgDataSquare: "some url",
  //   imgDataLarge: "some url",
  //   minute: "2",
  //   category: "Better Programming",
  //   author: "Tim Dimming",
  //   group: "The Writing Cooperative",
  //   blockDisplay: 'list',
  //   //blockDisplay: list, 'featured', 'Highlight', 'Network', 'Popular', 'reading',
  // }

  $('#select__display').change(function(){
    if($('#select__display') === "network"){
      $('#ctn__img__network').removeClass('d-none')
    }else{
      $('#ctn__img__network').addClass('d-none')
    }
  })

  
})


function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  return today
}