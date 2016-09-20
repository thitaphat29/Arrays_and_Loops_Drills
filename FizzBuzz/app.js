function fizzBuzz(countTo) {
  // your code here
  var result = [];
  for (var i=1; i <= countTo; i++) {
    if (i % 15 === 0) {
      result.push('fizzbuzz'); 
    }
    else if (i % 5 === 0) {
      result.push('buzz');
    }
    else if (i % 3 === 0) {
      result.push('fizz');
    }
    else {
      result.push(i);
    }
  }
  return result;
}


// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || []; // return array(result)
  
  if (
    expected.length === actual.length && expected.every(function(item, index) {
      return actual[index] === item;}) ) {
    
      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();



var expected = [1,2,3];
var actual = [1,2,3];


expected.every(
    function(item, index) {
      return actual[index] === item;
    }
)