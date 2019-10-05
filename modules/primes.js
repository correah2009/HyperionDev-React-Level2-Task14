exports.primes = function () {
    let primes = [];
    let numb = 1;

    const divisiblebyodds = (int) =>{
        let divisible = false;
        const halfInt = Math.floor(int/2);
        for(var i = 3; i < halfInt; i += 2 ){
            if(int%i === 0){
                divisible = true;
                break;
            }
        }
        return divisible
    }

    while(primes.length <= 100){
        if( numb === 1 || numb === 2){
            primes.push(numb);
            numb += 1;
        }else if (!divisiblebyodds(numb)){
            primes.push(numb);
            numb += 2;
        }else{
            numb += 2;
        }
    }

    return primes
}