
var el = document.getElementById("myTable")
var i = 1
var letter = "Y"

el.addEventListener("click", function(e) {
  // console.log(Number(e.target.id) * 2)
  // console.log("Square number:" + Number(e.target.id) + "was selected.")
  var square = e.target.id

  // i++

  if ( i % 2 === 0 ) {
    letter = "O"
  }
  else {
    letter = "X"
  }

  i = game.addPlay( square, letter, i )
  game.showPlay( square )
})

var myButton = document.getElementById("myButton")
myButton.addEventListener("click", function() {
  i = 1

  for ( var j = 1; j < 10; j++ ) {
    document.getElementById(j).textContent = ""
  }

  game.init()
  document.getElementById("visibleDiv").id = "hiddenDiv"
})

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
      i++
    }

    if ( i > 4 ) {
      if (      this.history[1].letter === "X" &&
                this.history[2].letter === "X" &&
                this.history[3].letter === "X"    ) {
                this.displayResult("X")
      }
      else if ( this.history[1].letter === "O" &&
                this.history[2].letter === "O" &&
                this.history[3].letter === "O"    ) {
                  this.displayResult("O")
      }
      else if ( this.history[4].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[6].letter === "X"    ) {
                  this.displayResult("X")
      }
      else if ( this.history[4].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[6].letter === "O"    ) {
                  this.displayResult("O")
      }
      else if ( this.history[7].letter === "X" &&
                this.history[8].letter === "X" &&
                this.history[9].letter === "X"    ) {
                  this.displayResult("X")
      }
      else if ( this.history[7].letter === "O" &&
                this.history[8].letter === "O" &&
                this.history[9].letter === "O"    ) {
                  this.displayResult("O")
      }
      else if ( this.history[1].letter === "X" &&
                this.history[4].letter === "X" &&
                this.history[7].letter === "X"    ) {
                  this.displayResult("X")
      }
      else if ( this.history[1].letter === "O" &&
                this.history[4].letter === "O" &&
                this.history[7].letter === "O"    ) {
                  this.displayResult("O")
      }
      else if ( this.history[2].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[8].letter === "X"    ) {
                  this.displayResult("X")
      }
      else if ( this.history[2].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[8].letter === "O"    ) {
                  this.displayResult("O")
      }
      else if ( this.history[3].letter === "X" &&
                this.history[6].letter === "X" &&
                this.history[9].letter === "X"    ) {
                  this.displayResult("X")
      }
      else if ( this.history[3].letter === "O" &&
                this.history[6].letter === "O" &&
                this.history[9].letter === "O"    ) {
                  this.displayResult("O")
      }
      else if ( this.history[1].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[9].letter === "X"    ) {
                  this.displayResult("X")
      }
      else if ( this.history[1].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[9].letter === "O"    ) {
                  this.displayResult("O")
      }
      else if ( this.history[3].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[7].letter === "X"    ) {
                  this.displayResult("X")
      }
      else if ( this.history[3].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[7].letter === "O"    ) {
                  this.displayResult("O")
      }
      else {
        if ( i === 10 ) {
          this.displayResult( "Sorry, no winner!" )
        }
      }
    }

    return i
  },
  showPlay: function( square ) {
    squareNum = Number( square )

    var mark = document.getElementById(this.history[squareNum].square)
    mark.textContent = this.history[squareNum].letter
  },
  displayResult: function(string) {

    if ( string.length === 1 ) {
      string = "The winner is " + string
    }

    document.getElementById("myH2").textContent = string
    document.getElementById("hiddenDiv").id = "visibleDiv"
  }
}

game.init()