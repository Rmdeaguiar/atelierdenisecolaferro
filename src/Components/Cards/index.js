import './styles.css';
import { useState } from 'react';
import Imagem2 from '../../assets/imagem2.jpeg'
import Imagem3 from '../../assets/imagem3.jpeg'
import Imagem4 from '../../assets/imagem4.jpeg'
import Imagem5 from '../../assets/imagem5.jpeg'
import Imagem6 from '../../assets/imagem6.jpeg'
import Imagem7 from '../../assets/imagem7.jpeg'
import Next from '../../assets/next.svg'
import Previous from '../../assets/previous.svg'

function Cards() {

    const products = [
        { id: 2, nome: 'Pulseira Turmalina', descricao: `Pulseira ajustável com macramê, de pedra natural turmalina rosa e pérola d'água com coração pintado à mão. Disponível também em várias pedras naturais. A pintura pode ser na madrepérola ou na pérola d'água e o motivo pode ser coração ou estrela Colar com pingente`, valor: '150,00', foto: Imagem2 },
        { id: 3, nome: 'Pulseira Coração', descricao: 'Pulseira ajustável com macramê em pedra natural rubelita e coração de madrepérola, com o coração pintado à mão. Temos várias opções de pedras naturais', valor: '90,00', foto: Imagem3 },
        { id: 4, nome: 'Colar Amazonita', descricao: 'Colar de amazonita com pingente de prata mexicana com pena. Peça única', valor: '400,00', foto: Imagem4 },
        { id: 5, nome: 'Pulseira Coral', descricao: 'Pulseira de coral vermelho com fecho em prata com coração de madrepérola e estrelada pintada a mão', valor: '100,00', foto: Imagem5 },
        { id: 6, nome: 'Colar Granada', descricao: 'Colar em pedra natural granada com fecho em prata e pingente de coração em prata com pedras de granada e pérola. Temos outros tipos de pedras para encomenda!', valor: '350,00', foto: Imagem6 },
        { id: 7, nome: 'Colar Safira', descricao: 'Colar em pedra natural safira com pingente preso de porcelana pintada a mão e encrustada na prata. Podemos fazer a pintura de qualquer motivo e tem também opção de pedras', valor: '380,00', foto: Imagem7 }]

    function detailCard(product) {
        setModalCard(true);
        setCard(product);
        setIndexCard(product.id - 1);
    }

    function nextCard() {
        setCard(products[indexCard]);
        if (indexCard === products.length - 1) {
            setIndexCard(0);
            return
        }
        setIndexCard(indexCard + 1);
    }

    function previousCard() {
        setCard(products[indexCard]);
        if (indexCard === 0) {
            setIndexCard(products.length - 1);
            return
        }
        setIndexCard(indexCard - 1);
    }

    const [card, setCard] = useState({});
    const [modalCard, setModalCard] = useState(false)
    const [indexCard, setIndexCard] = useState(0);

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
