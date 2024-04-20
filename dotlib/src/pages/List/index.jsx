import axios from 'axios'
import { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Modal from '../../components/Modal'
import './list.css'
import { ToastContainer, toast } from 'react-toastify';

{/* REACT ICONS */}
import { IoInformation } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function ListPage() {

  //ARMAZENAMENTO GET ALL
  const [medicamentos, setMedicamentos] = useState([]);

  //ARMAZENA POR ID
  const [medicamentoId, setMedicamentoId] = useState();

  const [pagina, setPagina] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState();

  useEffect(() => {
    async function loadMedicamentos() {
      const response = await axios.get("http://localhost:3000/data", {
        params: {
          _page: pagina,
        }
      })

      .then((response) => {
        setMedicamentos(response.data.data)
      })

      .catch((error) => [
        toast.error('Falha de conexão!', error)
      ])

    }

    loadMedicamentos()

  }, [pagina])

  //BUSCANDO MEDICAMENTO POR ID
  async function buscarMedicamento() {
    try {

      if (!medicamentoId) {
        toast.warning("ID do medicamento não está definido.");
        return;
      }
      
      const response = await axios.get(`http://localhost:3000/data/` + medicamentoId);
      
      //INSERINDO DADOS DO RESPONSE DIRETO NO MODAL
      if(response.data) {
        setDetail(response.data); 
        setShowModal(true); 
      } 

      else {
        toast.info("Nenhum medicamento encontrado com esse ID.");
      }

    } catch (error) {
      toast.warning('Erro ao buscar medicamento.', error);
    }
  }


  //EXIBIÇÃO DO MODAL
  function showPostModal(item) {
    setShowModal(!showModal)
    setDetail(item)
  }

  return (
    <div className="container">
      <Title name={'Listagem de Medicamentos'}>
        <AiFillMedicineBox size={25} color='#ffff' />
      </Title>

      <main>
        <div className='filter'>
          <label>Cod. Medicamento:</label>

          <div className='group-box'>
            <input className="code-box"
              type="text"
              placeholder="Ex: 2b52d716-b7d4-4e89-8c23-856b1870df73"
              onChange={e => setMedicamentoId(e.target.value)}
            />
            
            <button className='icon-search' onClick={() => buscarMedicamento()}>
              <IoIosSearch size={25} color='#ffff' />
            </button>

          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Laboratório</th>
              <th scope="col">Data de Publicação</th>
              <th scope="col">Nome Princípio Ativo</th>
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
                  <td data-label="Nome Princípio Ativo">{item.active_principles[0].name}</td>
                  <td data-label="Detalhes">
                    <button className="action" style={{ backgroundColor: '#008080' }} onClick={() => showPostModal(item)}>
                      <IoInformation color='#FFF' size={17} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* PAGINAÇÃO DA TABELA */}

        {/* PAGINA IGUAL A 1 -> PRIMEIRA PÁGINA */}
        <div className='pagination'>
          {pagina === 1 ? (
            <button disabled style={{ backgroundColor: '#A9A9A9' }}>
              <MdOutlineArrowBackIos color='#FFF' size={17} />
            </button>
          ) : (
            <button onClick={() => setPagina(pagina - 1)}>
              <MdOutlineArrowBackIos color='#FFF' size={17} />
            </button>
          )}

          <span>{pagina}</span>

          {/* SE NÚMERO DE ELEMENTOS DO ARRAY MENOR QUE 10 -> ÚLTIMA PÁGINA */}
          {medicamentos.length < 10 ? (
            <button disabled style={{ backgroundColor: '#A9A9A9' }}>
              <MdOutlineArrowForwardIos color='#FFF' size={17} />
            </button>
          ) : (
            <button onClick={() => setPagina(pagina + 1)}>
              <MdOutlineArrowForwardIos color='#FFF' size={17} />
            </button>
          )}
        </div>
      </main>

      {/* COMPONENTE MODAL E ATIVAÇÃO */}
      {showModal &&
        <Modal
          conteudo={detail}
          close={() => setShowModal(!showModal)}
        />
      }
    </div>
  )
}