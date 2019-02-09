$(function(){
  $('#button').click(function(){
  var lastName = $('#lastName').val();
  var firstName = $('#firstName').val();
  var birthDate = $('#birthDate').val();
  var birthPlace = $('#birthPlace').val();
  var job = $('#job').val();
  var business = $('#business').val();

  var regexText = /^[A-Za-z\à\â\ä\é\è\ê\ë\ï\î\ô\ö\ù\û\ü\ÿ\ç\À\Â\Ä\Ç\É\È\Ê\Ë\Î\Ï\Ô\Ö\Ù\Û\Ü\Ÿ -]+$/;
  var regexCity = /^[A-Za-z\à\â\ä\é\è\ê\ë\ï\î\ô\ö\ù\û\ü\ÿ\ç\À\Â\Ä\Ç\É\È\Ê\Ë\Î\Ï\Ô\Ö\Ù\Û\Ü\Ÿ ,'-]+$/;
  // var regexDate =
console.log(lastName);
console.log(firstName);
console.log(birthDate);
console.log(birthPlace);
console.log(job);
console.log(business);

  if ((regexText.test(lastName) == true) && (regexText.test(firstName) == true) && (regexCity.test(birthPlace) == true) && (regexText.test(job) == true) && (regexText.test(business) == true)){
    alert(lastName + firstName + ' , né(e) le ' + birthDate + ' à ' + birthPlace +' , actuellement ' + job + ' à ' + business);
  } else {
    alert('Vous avez une erreur');
  }
});
});
