import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Title from '../../components/Title'
import { LuInfo } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Modal from '../../components/Modal'

import './list.css'

export default function ListPage() {

  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoad] = useState([true]);
  const [pagina, setPagina] = useState(2);
  const [showModal, setShowModal] = useState(false)
  const [detail, setDetail] = useState()

  useEffect(() => {
    async function loadMedicamentos() {
      const response = await axios.get("http://localhost:3000/data", {
        params: {
          _page: pagina,
        }
      })
      console.log(response.data.data);
      setMedicamentos(response.data.data)
      setLoad(false);
    }

    loadMedicamentos()

  }, [pagina])

  function showPostModal(item){
    setShowModal(!showModal)
    setDetail(item)
  }

  return (
    <div className="container">
      <Title name={'Listagem de Medicamentos'}>
        <AiFillMedicineBox size={25} color='#ffff'/>
      </Title>

      <main>
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Laboratório</th>
              <th scope="col">Data de Publicação</th>
              <th scope="col">Tipo de Bula</th>
              <th scope="col">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {medicamentos.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label="Nome">{item.name}</td>
                  <td data-label="Laboratório">{item.company}</td>
                  <td data-label="Data de Publicação">{item.published_at}</td>
                  <td data-label="Tipo de Bula">
                    {/* TIPO DE BULA PROFISSIONA */}
                    {item.documents[0].type === 'PROFESSIONAL' &&
                      <span className="badge" style={{ backgroundColor: '#2F4F4F' }}>
                        {item.documents[0].type}
                      </span>
                    }

                    {/* TIPO DE BULA PACIENTE */}
                    {item.documents[0].type === 'PATIENT' &&
                      <span className="badge" style={{ backgroundColor: '#2E8B57' }}>
                        {item.documents[0].type}
                      </span>
                    }

                  </td>
                  <td data-label="Detalhes">
                    <button className="action" style={{ backgroundColor: '#20B2AA' }} onClick={() => showPostModal(item)}>
                      <LuInfo color='#FFF' size={17} />
                    </button>
                    <Link to={`${item.documents[1].url}`} className="action" style={{ backgroundColor: '#008080' }}>
                      <FaRegFilePdf color='#FFF' size={17} />
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='pagination'>
          {pagina === 1 ? (
            <button disabled className='return' style={{ backgroundColor: '#A9A9A9' }}>
              <MdOutlineArrowBackIos color='#FFF' size={17} />
            </button>
          ) : (
            <button onClick={() => setPagina(pagina - 1)} className='return'>
              <MdOutlineArrowBackIos color='#FFF' size={17} />
            </button>
          )}

          <span>{pagina}</span>

          {medicamentos.length < 10 ? (
            <button disabled className='return' style={{ backgroundColor: '#A9A9A9' }}>
              <MdOutlineArrowForwardIos  color='#FFF' size={17} />
            </button>
          ) : (
            <button onClick={() => setPagina(pagina + 1)} className='return'>
              <MdOutlineArrowForwardIos  color='#FFF' size={17} />
            </button>
          )}

        </div>
      </main>
      {showModal && 
        <Modal
        conteudo={detail}
        close={() => setShowModal(!showModal)}
        />
        }
    </div>
  )
}