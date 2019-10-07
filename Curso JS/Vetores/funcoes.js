function parimp(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }

}

res = parimp(115000);

res == true ? console.log("Par") : console.log('Impar')