
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
                console.log("W is the winner!")
      }
      else if ( this.history[1].letter === "O" &&
                this.history[2].letter === "O" &&
                this.history[3].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else if ( this.history[4].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[6].letter === "X"    ) {
                  console.log("W is the winner!")
      }
      else if ( this.history[4].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[6].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else if ( this.history[7].letter === "X" &&
                this.history[8].letter === "X" &&
                this.history[9].letter === "X"    ) {
                  console.log("W is the winner!")
      }
      else if ( this.history[7].letter === "O" &&
                this.history[8].letter === "O" &&
                this.history[9].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else if ( this.history[1].letter === "X" &&
                this.history[4].letter === "X" &&
                this.history[7].letter === "X"    ) {
                  console.log("W is the winner!")
      }
      else if ( this.history[1].letter === "O" &&
                this.history[4].letter === "O" &&
                this.history[7].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else if ( this.history[2].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[8].letter === "X"    ) {
                  console.log("W is the winner!")
      }
      else if ( this.history[2].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[8].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else if ( this.history[3].letter === "X" &&
                this.history[6].letter === "X" &&
                this.history[9].letter === "X"    ) {
                  console.log("W is the winner!")
      }
      else if ( this.history[3].letter === "O" &&
                this.history[6].letter === "O" &&
                this.history[9].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else if ( this.history[1].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[9].letter === "X"    ) {
                  console.log("W is the winner!")
      }
      else if ( this.history[1].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[9].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else if ( this.history[3].letter === "X" &&
                this.history[5].letter === "X" &&
                this.history[7].letter === "X"    ) {
                  console.log("W is the winner!")
      }
      else if ( this.history[3].letter === "O" &&
                this.history[5].letter === "O" &&
                this.history[7].letter === "O"    ) {
                  console.log("O is the winner!")
      }
      else {
        if ( i === 10 ) {
          console.log("Sorry, no winner!")
        }
      }
    }

    return i
  },
  showPlay: function( square ) {
    squareNum = Number( square )

    var mark = document.getElementById(this.history[squareNum].square)
    mark.textContent = this.history[squareNum].letter
  }
}

game.init()