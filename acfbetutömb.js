const allatok = ['malac', 'cica', 'fácán', 'egér'];
const gyumolcsok = ['alma', 'körte', 'füge', 'kiwi'];

function acfBetusEllenorzo (szo){
    for (const letter of szo){
        for (const betu of letter){
            if (betu === 'a' || betu === 'c' || betu === 'f'){
                return true
            }
        }
    }
    return false
}

const allatokOsszes = allatok.filter(acfBetusEllenorzo);
const gyumolcsokOsszes = gyumolcsok.filter(acfBetusEllenorzo);

const osszes = [...allatokOsszes,...gyumolcsokOsszes];
console.log(osszes)

document.querySelector('#jelszo').addEventListener ('change', jelszoValtozasKereso);
document.querySelector('#jelszo').addEventListener ('keyup', jelszoValtozasKereso);

function jelszoValtozasKereso(event){
    megjelenito (jelszoEllenorzes(event))
}

function jelszoEllenorzes(event){
    const beirtJelszo = event.target.value
    for (const elvartJelszo of osszes){
        if (elvartJelszo === beirtJelszo){
            return true;
        }
    }
    return false;
}

function megjelenito(megjelenit){
    const helyesJelszoIras = document.querySelector('#szoveg');
    helyesJelszoIras.style.display = megjelenit ? 'block' : 'none'
}