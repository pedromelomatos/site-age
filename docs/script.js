const conteudo_hero = [{
                        'span': 'EMPRÉSTIMO CONSIGNADO',
                        'h1':'Realize seus <span>sonhos</span> com a <span>AGE GOLD</span>!',
                        'p':'Trabalhamos para ajudar pessoas como você a ter uma vida melhor a partir do crédito consignado.',
                        'img':'/static/imagens/senhora.png'
                    },
                    {
                        'span': 'FGTS',
                        'h1': 'Antecipação do <span>FGTS</span>',
                        'p': 'Experimente condições imperdíveis com nossas opções de crédito pessoal. Alcance sua tranquilidade, viaje e coloque suas finanças de volta nos trilhos.',
                        'img': '/static/imagens/familiafgts.png'
                    },
                    {
                        'span':'PORTABILIDADE DE DÍVIDA',
                        'h1': 'As menores taxas com a <span>portabilidade</span>',
                        'p': 'Oferecemos soluções financeiras de refinanciamento e portabilidade de  dívidas para que você possa aliviar suas preocupações financeiras e dormir tranquilo.',
                        'img': '/static/imagens/mulher-de-amarelo.png'
                    },
                    {
                        'span':'CONSÓRCIO',
                        'h1': 'Seu <span>consórcio</span> com a <span>AGE GOLD</span>.',
                        'p': 'Obtenha seu mais novo automóvel com qualidade, segurança e parcelas que cabem no seu bolso.',
                        'img': '/static/imagens/consorcio.png'
                    }
]

let indice = 0
const qtd_itens = conteudo_hero.length

//elementos do html:

const heroSpan = document.getElementById('span-hero')
const heroH1 = document.getElementById('h1-hero')
const heroP = document.getElementById('p-hero')
const heroImg = document.getElementById('img-hero')

function atualizaHero(){
    heroSpan.innerHTML = conteudo_hero[indice].span
    heroH1.innerHTML = conteudo_hero[indice].h1
    heroP.innerHTML = conteudo_hero[indice].p
    heroImg.src = conteudo_hero[indice].img
    indice++
    if (indice == qtd_itens){
        indice = 0
    }
}

setInterval(atualizaHero, 6000)