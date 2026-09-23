import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function ListaPalabras({ idUsuario }) {
  const [palabras, setPalabras] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    async function cargarPalabras() {
      const { data, error } = await supabase
        .from('palabras')
        .select('id_palabra, palabra_lengua_nativa, traduccion_espanol, dificultad, categorias(nombre)')
        .order('id_palabra')

      if (error) {
        console.error('Error cargando palabras:', error)
      } else {
        setPalabras(data)
      }
      setCargando(false)
    }
    cargarPalabras()
  }, [])

  // función del paso 4, dentro del mismo componente
  async function marcarComoDominada(idPalabra) {
    const { error } = await supabase
      .from('progreso')
      .upsert({
        id_usuario: idUsuario,
        id_palabra: idPalabra,
        dominado: true,
        fecha_ultima_practica: new Date().toISOString().split('T')[0],
      })

    if (error) console.error('Error guardando progreso:', error)
    else alert('¡Palabra marcada como dominada!')
  }

  if (cargando) return <p>Cargando...</p>

  return (
    <ul>
      {palabras.map((p) => (
        <li key={p.id_palabra}>
          <strong>{p.palabra_lengua_nativa}</strong> — {p.traduccion_espanol} ({p.categorias.nombre})
          <button onClick={() => marcarComoDominada(p.id_palabra)}>Dominado ✓</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaPalabras