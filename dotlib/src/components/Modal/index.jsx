import './modal.css'
import { FiX } from 'react-icons/fi'

export default function Modal({ conteudo, close }) {
    return (
        <div className="modal">
            <div className="container">
                <button className='close' onClick={close}>
                    <FiX size={25} color='#FFF' />
                </button>

                <main>
                    <h2>Detalhes do Medicamento</h2>

                    <div className='row'>
                        <span> Identificador: <i>{conteudo.id}</i> </span>
                    </div>

                    <div className='row'>
                        <span> Nome: <i>{conteudo.name}</i> </span>
                    </div>

                    <div className="row">
                        <span>
                            Laboratório: <i>{conteudo.company}</i>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            Tipo de Bula: <i>{conteudo.documents[0].type}</i>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            PDF Bula: <a href={conteudo.documents[0].url}> Ver Pdf </a>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            Principio Ativo: <i>{conteudo.active_principles[0].name}</i>
                        </span>
                    </div>

                    {conteudo.complemento ? (
                        <>
                            <h3>Complemento</h3>
                            <p>
                                {conteudo.name}
                            </p>
                        </>
                    ) : (
                        <h3>Sem complemento</h3>
                    )}
                </main>
            </div>
        </div>
    )
}