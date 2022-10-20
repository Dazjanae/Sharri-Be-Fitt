/* User will click on the calculate button. Take the number value from both inputs. 
Add the 2 values together ( maybe make this value a variable). Then, populate the
value into the document so client can see it. */


document.querySelector('.totalButton').addEventListener('click', losePounds)

function losePounds(){
    let currentWeight = Number(document.querySelector('#cWeight').value)
    let goalWeight = Number(document.querySelector('#gWeight').value)
    let loseThesePounds = currentWeight - goalWeight
    let gainThesePounds = goalWeight - currentWeight
    if(goalWeight <= currentWeight){
    document.querySelector('.totalWeightDifference').innerHTML = `You need to lose ${loseThesePounds} lbs to achieve this weight.`
    }else {
        document.querySelector('.totalWeightDifference').innerHTML = `You need to gain ${gainThesePounds} lbs to achieve this weight`
    }
}
