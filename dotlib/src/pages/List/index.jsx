import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Title from '../../components/Title'
import { FiSearch } from 'react-icons/fi'
import { FaRegFilePdf } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import './list.css'

export default function ListPage() {

    const [medicamentos, setMedicamentos] = useState([]);
    const [loading, setLoad] = useState([true]);

    useEffect(() => {
        async function loadMedicamentos() {
            const response = await axios.get("http://localhost:3000/data", {
              params: {
                _page: 1,
              }
            })
            console.log(response.data.data);
            setMedicamentos(response.data.data)
            setLoad(false);
          }
      
          loadMedicamentos()

    }, [])

    return (
        <div>
            <Title name={'Listagem de Medicamentos'}> 
                <AiFillMedicineBox size={25} />
            </Title>

            <main>
              <table>
                  <thead>
                      <tr>
                          <th scope="col">Nome</th>
                          <th scope="col">Laboratório</th>
                          <th scope="col">Data de Publicação</th>
                          <th scope="col">Tipo de Bula</th>
                          <th scope="col">#</th>
                      </tr>
                  </thead>
                  <tbody>
                    {medicamentos.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td data-label="Nome">{item.name}</td>
                          <td data-label="Laboratório">{item.name}</td>
                          <td data-label="Data de Publicação">{item.name}</td>
                          <td data-label="Tipo de Bula">
                            {/* TIPO DE BULA PROFISSIONA */}
                            {item.documents[0].type === 'PROFESSIONAL' && 
                              <span className="badge" style={{ backgroundColor: '#bf5d02' }}>
                              {item.documents[0].type}
                              </span>
                            }

                            {/* TIPO DE BULA PACIENTE */}
                            {item.documents[0].type === 'PATIENT' && 
                              <span className="badge" style={{ backgroundColor: '#bf5d02' }}>
                              {item.documents[0].type}
                              </span>
                            }

                          </td>
                          <td data-label="#">
                            <button className="action" style={{ backgroundColor: '#0026f6' }} onClick={() => showPostModal(item)}>
                              <FiSearch color='#FFF' size={17} />
                            </button>
                            <Link to={`${item.documents[1].url}`} className="action" style={{ backgroundColor: '#bd0000' }}>
                              <FaRegFilePdf color='#FFF' size={17} />
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
              </table>
            </main>
        </div>
    )
}