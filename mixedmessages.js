//Subject of quote (8 total)
const subjectList = [
    'The Breathless Dragon', 
    'The Red River', 
    'The Fallen Mountain', 
    'The Purple Sun', 
    'The Rising Leaves', 
    'The Fading Moon', 
    'The Endless Void', 
    'The Boneless Snake'];
//Action of subject (9 total)
const actionList = [
    'falls off', 
    'rises up', 
    'ascends up', 
    'never sets on', 
    'descends from', 
    'speaks to', 
    'greets', 
    'touches', 
    'sees'];
//Places (7 total)
const placesList = [
    'the eternal mountain', 
    'the end of time', 
    'Narnia', 
    'the north star', 
    'Agrabah', 
    'Jormngandr', 
    'the great divide'];

//function to create random text
function randomQuote() {
    function getRandNum(array){
        return Math.floor(Math.random() * array.length);
    }
//select random index from arrays
    let subject = subjectList[getRandNum(subjectList)];
    let action = actionList[getRandNum(actionList)];
    let place = placesList[getRandNum(placesList)];

//Putting the quote together
    let fullQuote = `${subject} ${action} ${place}`;
    console.log(fullQuote + " ...anonymous");
}

randomQuote();
