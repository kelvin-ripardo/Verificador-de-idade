function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'img')

        if (fsex [0].checked) {
            genero = 'Homem'
            if( idade >= 0 && idade < 14){
                // criança
                img.setAttribute('src', 'src/img/foto-bebe-m.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'src/img/foto-jovem-m.png')
            }
            else if (idade < 60){
                //adultto
                img.setAttribute('src', 'src/img/foto-adulto-m.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'src/img/foto-idoso-m.png')
            }

         } else 
               if (fsex [1].checked) {
            genero = 'Mulher'

            if( idade >= 0 && idade <14){
                // criança
                img.setAttribute('src', 'src/img/foto-bebe-f.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'src/img/foto-jovem-f.png')
            }
            else if (idade < 60){
                //adultto
                img.setAttribute('src', 'src/img/foto-adulto-f.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'src/img/foto-idoso-f.png')
            }
         }
         res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
         res.style.textAlign = 'center'
         res.appendChild(img) 
         
         
         
    }


}