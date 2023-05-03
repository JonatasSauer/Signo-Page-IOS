function escolhaSigno() {
  const signo = document.querySelector('#signos').value
  let text;
  const resp = document.querySelector('#frase')
  if (resp.classList.contains('height-text')) {
    resp.classList.remove('height-text')
    resp.classList.add('height0')
  }
  if (resp.classList.contains('height-anything')) {
    resp.classList.remove('height-anything')
    resp.classList.add('height0')
  }
  const img = document.querySelector('#image')
  if (img.classList.contains('opacity1')) {
    img.classList.remove('opacity1')
    img.classList.add('opacity0')
  }
  if (resp.classList.contains('height-text') || resp.classList.contains('height-anything')) {
    resp.classList.remove('height-text')
    resp.classList.remove('height-anything')
    resp.classList.add('height0')
  }
  switch (signo) {
    case 'Áries':
      text = ''
    resp.innerHTML = text
      text = 'Áries pode se identificar com características como a impulsividade e a coragem. Sabe aquela galera que não tem medo de nada? Provavelmente tem Áries forte no Mapa. Eles também amam motivar quem está ao seu redor e são guerreiros por natureza.'
        document.body.style.cssText = "background: linear-gradient(to bottom right, #102245, #9F4FF4);"
        document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, #9F4FF4);"
        document.querySelector(".escolha h1").innerHTML = "Áries"
        img.src = 'https://marciatravessoni.com.br/wp-content/uploads/2023/03/touro-signo-do-zodiaco-ceu-azul-horoscopo-astrologia-fundo-touro-azul-horoscopo-1024x683.jpg'
        img.classList.add('opacity1');
        img.classList.remove('opacity0');
      
      resp.classList.add('height-text')
      break

    case 'Touro':
      text = ''
    resp.innerHTML = text
      
        img.src = 'https://images.educamaisbrasil.com.br/content/noticias/touro-no-trabalho-conheca-as-caracteristicas-do-signo_g.jpg'
      document.querySelector(".escolha h1").innerHTML = "Touro"
      resp.classList.add('height-text')
      text = 'Quem nasce com o sol no signo Touro pode se identificar com virtudes como a paciência, o bom gosto e a sensualidade. Afeto e valorização do prazer e conforto também podem ser características de Touro, mas sabe aquela galera meio teimosa? Pode ser que tenham o signo de Touro forte no Mapa também...'
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245, blue);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, blue);"
      break

    case 'Gêmeos':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Gêmeos geralmente se identifica com características como a curiosidade, a inteligência e o desejo de liberdade. Sabe aquela galera que ama ler, aprender coisas novas, puxar conversa e fazer novas amizades? Provavelmente tem gêmeos signo forte no mapa.'
        document.querySelector(".escolha h1").innerHTML = "Gêmeos"
      resp.classList.add('height-text')
       img.src = 'https://img.freepik.com/fotos-premium/signo-de-gemeos-ceu-noturno-horoscopo-astrologia-de-fundo-simbolo-do-horoscopo-de-gemeos_559531-17981.jpg'
       document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,red);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, red);"
      break

      
    case 'Câncer':
      text = ''
      document.querySelector(".escolha h1").innerHTML = "Gêmeos"
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Câncer pode se identificar com características como a sensibilidade e o carinho. Um canceriano ou canceriana típicos costumam ter uma ótima intuição, além de um forte vínculo com seus familiares. A busca constante por segurança também é uma característica do signo de câncer.'

       img.src = 'https://img.nsctotal.com.br/wp-content/uploads/2022/10/signo_cancer-1.jpg'
      document.querySelector(".escolha h1").innerHTML = "Câncer"
      resp.classList.add('height-text')
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,green);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, green);"
      break

    case 'Leão':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo Leão pode se identificar com características como a criatividade e a coragem. Sabe aquela galera com a autoestima lá em cima? Provavelmente tem Leão signo forte no mapa. A generosidade e o otimismo também podem ser bem presentes.'
     document.querySelector(".escolha h1").innerHTML = "Leão"

       img.src = 'https://img.nsctotal.com.br/wp-content/uploads/2022/10/Signo-de-Leao-shutterstock_1-1.jpg'
      resp.classList.add('height-text')
      document.querySelector(".escolha h1").innerHTML = "Leão"
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,yellow);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, yellow);"
      break

    case 'Virgem':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o Sol no signo Virgem pode se identificar com características como a objetividade e a organização. Virginianas e virginianos típicos costumam buscar constantemente a perfeição e identificar facilmente detalhes que passam despercebidos por todos os outros, essa é uma das características de Virgem mais admiradas.'
     document.querySelector(".escolha h1").innerHTML = "Virgem"
      resp.classList.add('height-text')
      document.querySelector(".escolha h1").innerHTML = "Virgem"

       img.src = 'https://img.nsctotal.com.br/wp-content/uploads/2022/10/Signo-de-Virgem-shutterstock_2-1.jpg.webp'
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,pink);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, pink);"
      break

    case 'Libra':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo Libra, em geral, se identifica com características como a cortesia, a delicadeza e a busca constante pelo equilíbrio. Librianas e librianos típicos adoram viver relacionamentos e tendem a ter um pouco de dificuldade para tomar decisões.'
      document.querySelector(".escolha h1").innerHTML = "Libra"
      document.querySelector(".escolha h1").innerHTML = "Libra"
      resp.classList.add('height-text')
       img.src = 'https://img.nsctotal.com.br/wp-content/uploads/2022/10/Signo-de-Libra-shutterstock_1-1.jpg'
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,orange);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, orange);"
      break
      
    case 'Escorpião':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo Escorpião pode se identificar com características como a intensidade e o poder de transformação. Escorpianas e escorpianos típicos costumam ser bastante passionais e muito generosos. O espírito de detetive e o sexto sentido afiado também são bem marcantes em quem tem escorpião forte no mapa também.'
       img.src = 'https://joaobidu.com.br/images/large/2021/10/25/voce-conhece-bem-os-escorpianos-saiba-as-caracteristicas-desse-signo-18411.jpg'
      resp.classList.add('height-text')
      document.querySelector(".escolha h1").innerHTML = "Escorpião"
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,darkblue);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, darkblue);"
      break

    case 'Sagitário':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Sagitário pode se identificar com características como o otimismo e o desejo de liberdade. Sagitarianas e sagitarianos típicos costumam ser viajantes e, geralmente, enxergam o mundo inteiro como sua casa. A jovialidade também é uma característica marcante de Sagitário.'
      img.src = 'https://portaledicase.com/wp-content/uploads/2022/11/shutterstock_1188191299.jpg'
      resp.classList.add('height-text')
      document.querySelector(".escolha h1").innerHTML = "Sagitário"
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,darkred);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, darkred);"
      break

    case 'Capricórnio':
      text = ''
    resp.innerHTML = text
      text = 'Quem tem Sol em Capricórnio pode se identificar com virtudes como persistência e responsabilidade. Capricórnio signo costuma ter metas bem definidas e noção dos seus limites. A relação próxima com o trabalho também pode ser uma característica de capricórnio bem marcante.'
     document.querySelector(".escolha h1").innerHTML = "Capricórnio"
      resp.classList.add('height-text')
       img.src = 'https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/01/signo-de-capricornio-conheca-tudo-sobre-as-caracteristicas-do-signo.jpg'
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,darkgreen);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, darkgreen);"
      break

    case 'Aquário':
      text = ''
    resp.innerHTML = text
     
      resp.classList.add('height-text')
      text = 'Um aquariano ou uma aquariana pode se identificar com características como o desejo de inovar e a independência. Sabe aquela galera diferentona? São eles. Aquário signo costuma ser bastante idealista e seus nativos prezam por experiências que trazem liberdade. Podem ter posturas consideradas radicais e é bem comum o aquariano ser o "do contra" da turma.'
      document.querySelector(".escolha h1").innerHTML = "Aquário"
       img.src = 'https://img.nsctotal.com.br/wp-content/uploads/2022/10/Signo-de-Aquario-shutterstock_3-1.jpg'
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,#222);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, #222);"
      break

    case 'Peixes':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Peixes pode se identificar com virtudes como a sensibilidade e a intuição. Piscianos e piscianas típicos costumam ser bastante solidários e muitas vezes têm uma forte conexão com a espiritualidade. Por serem bastante sonhadores, se iludir com certa facilidade também é uma característica de Peixes.'
       img.src = 'https://portaledicase.com/wp-content/uploads/2022/02/Signo-de-Peixes-shutterstock.jpg'
      resp.classList.add('height-text')
      document.querySelector(".escolha h1").innerHTML = "Peixes"
      document.body.style.cssText = "background: linear-gradient(to bottom right, #102245,#888);"
       document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom right, #102245, #888);"
      break

    default:

      img.classList.add('opacity0')
      img.classList.remove('opacity1')
      text = 'Escreva um signo válido'
      resp.classList.add('height-anything')
  }

    resp.classList.remove('height0')

    resp.innerHTML = text
  
}

/* Apagando um elemento 
document.body.removeChild(elemento)
*/