$().ready(function(){
  $("#getNums").validate({
    rules:{
      one: {
        required: true,
        min: -1000,
        max: 1000
      },
      two: {
        required: true,
        min: Number(document.forms["getNums"]["one"].value),
        max: 1000
      },
      three: {
        required: true,
        min: -1000,
        max: 1000
      },
      four: {
        required: true,
        min: Number(document.forms["getNums"]["three"].value),
        max: 1000
      }
    },
    messages:{
      one: "Enter min column value",
      two: "Enter max column value",
      three: "Enter min row value",
      four: "Enter max row value",
    }
  })
})
