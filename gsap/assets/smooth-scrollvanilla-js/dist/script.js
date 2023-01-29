document.addEventListener("DOMContentLoaded", function(event) {
  
  // one item option
  
  var bottomButton = document.querySelector('.bottom-item')
  var footer = document.querySelector('.footer')
  
  bottomButton.addEventListener('click', function () {
    footer.scrollIntoView({behavior: "smooth"})
  })
  
  footer.addEventListener('click', function () {
    bottomButton.scrollIntoView({behavior: "smooth"})
  })
  
  
  // multiple items option
  
  var navigation = document.querySelector('nav ul')
  
  navigation.addEventListener('click', function (e) {
    
    if (e.target.classList[0].includes('-item')) {
      var item = e.target.classList[0].split('-')[0];
      
      var section = document.querySelector('.' + item)
      
      section.scrollIntoView({behavior: "smooth"})
    }
  })
})