
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

  game.addPlay( square, letter )
  game.showPlay( square )
})

// console.log(i)
// var mark = document.getElementById("1")
// mark.textContent = "X"

var game = {
  init: function() {
    this.history = []

    for ( var j = 0; j < 10; j++ ) {
      this.initArray( "0", "a" )
    }
  },
  initArray: function( square, letter ) {
    this.history.push({
      letter: letter,
      square: square
    } )
  },
  addPlay: function( square, letter ) {
    squareNum = Number(square)

    if ( this.history[squareNum].letter === "a" ) {
      this.history[squareNum].letter = letter
      this.history[squareNum].square = square
    }
  },
  showPlay: function( square ) {
    squareNum = Number( square )

    var mark = document.getElementById(this.history[squareNum].square)
    mark.textContent = this.history[squareNum].letter
  }
}

game.init()