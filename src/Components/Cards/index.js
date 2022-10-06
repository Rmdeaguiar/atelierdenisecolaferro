import './styles.css';
import { useState } from 'react';
import Imagem1 from '../../assets/imagem2.jpeg'
import Imagem2 from '../../assets/imagem3.jpeg'
import Imagem3 from '../../assets/imagem4.jpeg'
import Imagem4 from '../../assets/imagem5.jpeg'
import Imagem5 from '../../assets/imagem6.jpeg'
import Imagem6 from '../../assets/imagem7.jpeg'
import Next from '../../assets/next.svg'
import Previous from '../../assets/previous.svg'

function Cards() {

    const [card, setCard] = useState({});
    const [modalCard, setModalCard] = useState(false);
    const [id, setId] = useState(0);


    const products = [
        { id: 0, nome: 'Pulseira Turmalina', descricao: `Pulseira ajustável com macramê, de pedra natural turmalina rosa e pérola d'água com coração pintado à mão. Disponível também em outras pedras. A pintura pode ser na madrepérola ou na pérola d'água e o motivo coração ou estrela.`, valor: '150,00', foto: Imagem1 },
        { id: 1, nome: 'Pulseira Coração', descricao: 'Pulseira ajustável com macramê em pedra natural rubelita e coração de madrepérola, com coração pintado à mão. Disponível também em outras pedras', valor: '90,00', foto: Imagem2 },
        { id: 2, nome: 'Colar Amazonita', descricao: 'Colar de amazonita com pingente de prata mexicana com pena. Peça única', valor: '400,00', foto: Imagem3 },
        { id: 3, nome: 'Pulseira Coral', descricao: 'Pulseira de coral vermelho com fecho em prata com coração de madrepérola e estrelada pintada a mão', valor: '100,00', foto: Imagem4 },
        { id: 4, nome: 'Colar Granada', descricao: 'Colar em pedra natural granada com fecho em prata e pingente de coração em prata com pedras de granada e pérola. Disponível também em outras pedras', valor: '350,00', foto: Imagem5 },
        { id: 5, nome: 'Colar Safira', descricao: 'Colar em pedra natural safira com pingente preso de porcelana pintada à mão e encrustada na prata. Disponível também em outras pedras', valor: '380,00', foto: Imagem6 }
    ]


    function detailCard(product) {
        setModalCard(true);
        setCard(product);
        setId(product.id)
    }

    function nextCard() {
        let i = id
        i++
        if (i === products.length) {
            setId(0)
            setCard(products[id])
            return
        }
        setId(i)
        setCard(products[i])
    }

    function previousCard() {
        let i = id
        i--
        if (i < 0) {
            i = products.length - 1
            setCard(products[i])
            setId(i)
            return
        }
        setCard(products[i])
        setId(i);
    }

    return (
        <>
            <div className='container-cards'>
                {products.map((product) => (
                    <div key={product.id} className='card' onClick={() => detailCard(product)}>
                        <img src={product.foto} alt='imagem-produto' />
                        <h3>{product.nome}</h3>
                        <p>{product.descricao}</p>
                        <span>R$ {product.valor}</span>
                    </div>))}
            </div>
            {modalCard &&
                <div className='modal-cards'>
                    <img className='arrows' src={Previous} alt='anterior' onClick={() => previousCard()} />
                    <div className='modal-card'>
                        <h1 onClick={() => setModalCard(false)}>X</h1>
                        <img src={card.foto} alt='imagem-produto' />
                        <h3>{card.nome}</h3>
                        <p>{card.descricao}</p>
                        <span>R$ {card.valor}</span>
                    </div>
                    <img className='arrows' src={Next} alt='próximo' onClick={() => nextCard()} />
                </div>}
        </>

    );
}

export default Cards;
