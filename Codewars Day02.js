// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let spaceIndex, firstName, lastName, initials;
    spaceIndex = name.indexOf(" ");
    firstName = name.toUpperCase( ).slice(0, spaceIndex);
    lastName = name.toUpperCase( ).slice(spaceIndex + 1);
    initials = firstName[0] + '.' + lastName[0];
    
    return initials;
  }


