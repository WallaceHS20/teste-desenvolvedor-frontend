import './modal.css'
import { FiX } from 'react-icons/fi'

import { FaBarcode } from "react-icons/fa6";
import { RiMedicineBottleFill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { PiNewspaperClipping } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { GiMaterialsScience } from "react-icons/gi";

export default function Modal({ conteudo, close }) {
    return (
        <div className="modal">
            <div className="modal-container">
                <button className='close' onClick={close}>
                    <FiX size={25} color='#FFF' />
                </button>

                <div className='description'>
                    <h2> Detalhes do Medicamento </h2>

                    <div className='row'>
                        <GiMaterialsScience size={15} color='#00000'/>
                        <span> Identificador: <i>{conteudo.id}</i></span>
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
                </div>
            </div>
        </div>
    )
}