const hq = 42;

function distanceFromHqInBlocks(start){
    console.log(start - hq)
    let distance = start - hq
    if(distance < 0){
        distance = distance * -1
    }
    return distance
}

function distanceFromHqInFeet(start){
    console.log(start - hq)
    let distance = start - hq  
    if(distance < 0){
        distance = distance * -1
    }
    return distance * 264
}

function distanceTravelledInFeet(start, destination){
    console.log(start - destination)
    let distance = start - destination
    if(distance < 0){
        distance = distance * -1
    }
    return distance * 264
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    let sample = 400
    if(feet < 400){
        return 0
    }
    else if(feet >= 400 && feet < 2000){
        return (feet - sample) * 0.02
    }
    else if(feet >= 2000 && feet < 2500){
    return 25
    }
    else {
        return 'cannot travel that far'
    }
}