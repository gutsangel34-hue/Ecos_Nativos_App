import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import { useAuth } from '../AuthContext'

function LeccionDetalle() {
  const { id } = useParams()
  const { usuario } = useAuth()
  const [leccion, setLeccion] = useState(null)
  const [palabras, setPalabras] = useState([])

  useEffect(() => {
    async function cargarDatos() {
      const { data: leccionData } = await supabase
        .from('lecciones')
        .select('titulo')
        .eq('id_leccion', id)
        .single()
      setLeccion(leccionData)

      const { data: palabrasData, error } = await supabase
        .from('leccion_palabras')
        .select('palabras(id_palabra, palabra_lengua_nativa, traduccion_espanol, dificultad)')
        .eq('id_leccion', id)

      if (!error) setPalabras(palabrasData.map((p) => p.palabras))
    }
    cargarDatos()
  }, [id])

  async function marcarComoDominada(idPalabra) {
    await supabase.from('progreso').upsert({
      id_usuario: usuario.id_usuario,
      id_palabra: idPalabra,
      dominado: true,
      fecha_ultima_practica: new Date().toISOString().split('T')[0],
    })
    alert('¡Guardado!')
  }

  return (
    <div className="page">
      <Link to="/lecciones">&larr; Volver a lecciones</Link>
      <h1 className="page-title">{leccion?.titulo}</h1>

      {palabras.length === 0 ? (
        <p className="empty-state">Esta lección aún no tiene palabras.</p>
      ) : (
        <div className="card-grid">
          {palabras.map((p) => (
            <div className="card word-card" key={p.id_palabra}>
              <span className="word-card__nativa">{p.palabra_lengua_nativa}</span>
              <span className="word-card__traduccion">{p.traduccion_espanol}</span>
              <div className="word-card__footer">
                <span className="badge">{p.dificultad}</span>
                <button className="btn-dominar" onClick={() => marcarComoDominada(p.id_palabra)}>
                  Dominado ✓
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LeccionDetalle