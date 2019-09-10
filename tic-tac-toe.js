var el = document.getElementById("myTable")
var i = 0
var letter = "Y"

el.addEventListener("click", function(e) {
  // console.log(Number(e.target.id) * 2)
  // console.log("Square number:" + Number(e.target.id) + "was selected.")
  var square = e.target.id

  i++

  if ( i % 2 === 0 ) {
    letter = "O"
  }
  else {
    letter = "X"
  }

  if ( i < 10 ) {
    game.addPlay( square, letter )
    game.showPlay()
  }
})

// console.log(i)
// var mark = document.getElementById("1")
// mark.textContent = "X"

var game = {
  init: function() {
    this.history = []
  },
  addPlay: function( square, letter ) {
    this.history.push({
      letter: letter,
      square: square
    })
  },
  showPlay: function() {
    var mark = document.getElementById(this.history[i - 1].square)
    mark.textContent = this.history[i - 1].letter
  }
}

game.init()

