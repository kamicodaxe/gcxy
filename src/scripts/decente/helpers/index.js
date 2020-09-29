



/**
 * Inputs: noLevels, influencedSuface, Category
 */


 /**
  * Determinig AlphaN,
  * Inputs: Category: ENUM, Level: number
  */

  function getAlphaN(cat, level) {
      if (level<= 2) {
          return 1
      }

      if (cat == "A") {
          return (0.5 + 1.36/level);
      } else {
          return (0.5 + 1.36/level);
      }
  }

  function n() {

  }