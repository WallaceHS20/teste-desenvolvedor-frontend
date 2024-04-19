import './modal.css'
import { FiX } from 'react-icons/fi'
import { Link } from "react-router-dom"
import { RiMedicineBottleFill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { PiNewspaperClipping } from "react-icons/pi";
import { FaRegFilePdf } from "react-icons/fa";
import { TbBarcode } from "react-icons/tb";
import { PiPillThin } from "react-icons/pi";

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
                        <PiNewspaperClipping size={25} color='#00000' />
                        <span> Identificador: <i>{conteudo.id}</i></span>
                    </div>

                    <div className='row'>
                        <RiMedicineBottleFill size={25} color='#00000' />
                        <span> Nome: <i>{conteudo.name}</i> </span>
                    </div>

                    <div className="row">
                        <ImLab size={25} color='#00000' />
                        <span>
                            Laboratório: <i>{conteudo.company}</i>
                        </span>
                    </div>

                    {conteudo.documents.map((doc) => (
                        doc.type === 'PROFESSIONAL' && (
                            <div key={doc.id} className="row">
                                <FaRegFilePdf size={25} color='#00000' />
                                <span>
                                    Bula Profissional:
                                    <Link to={`${doc.url}`} className="icon-span">
                                        Bula_Profissional.pdf
                                    </Link>
                                </span>
                            </div>
                        )
                    ))}

                    {conteudo.documents.map((doc) => (
                        doc.type === 'PATIENT' && (
                            <div key={doc.id} className="row">
                                <FaRegFilePdf size={30} color='#00000' />
                                <span>
                                    Bula Paciente:
                                    <Link to={`${doc.url}`} className="icon-span">
                                        Bula_Paciente.pdf
                                    </Link>
                                </span>
                            </div>
                        )
                    ))}

                    <div className="row">
                        <TbBarcode size={25} color='#00000' />
                        <span>
                            Código Princípio Ativo: <i>{conteudo.active_principles[0].id}</i>
                        </span>
                    </div>

                    <div className="row">
                        <PiPillThin size={25} color='#00000' />
                        <span>
                            Nome Principio Ativo: <i>{conteudo.active_principles[0].name}</i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}