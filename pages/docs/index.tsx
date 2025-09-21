import Head from 'next/head'
import Link from 'next/link'

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentación - Docs Proyecto Curso</title>
        <meta name="description" content="Documentación del micrositio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
            ← Volver al inicio
          </Link>
        </nav>
        
        <h1>📖 Documentación del Proyecto</h1>
        
        <p>Bienvenido a la documentación del micrositio de documentación.</p>
        
        <h2>Introducción</h2>
        <p>Este proyecto sirve como ejemplo para demostrar el uso de:</p>
        <ul>
          <li>Control de versiones con Git</li>
          <li>Versionado semántico (SemVer)</li>
          <li>Gestión de releases</li>
          <li>Trazabilidad de cambios</li>
        </ul>
        
        <h2>Estructura de la documentación</h2>
        <ul>
          <li><strong>Introducción</strong> - Esta página</li>
          <li><em>Más secciones se agregarán en futuras versiones</em></li>
        </ul>

        <h2>Guía de contribución</h2>
        <p>
          Para contribuir al proyecto, consulta nuestra{' '}
          <Link href="/docs/contributing" style={{ color: '#0070f3' }}>
            guía de contribución
          </Link>
          {' '}donde encontrarás el flujo de trabajo y estándares del proyecto.
        </p>
        
        <h2>Información de versión</h2>
        <div style={{ 
          border: '1px solid #e1e5e9', 
          borderRadius: '6px', 
          padding: '1rem', 
          backgroundColor: '#f6f8fa',
          margin: '1rem 0'
        }}>
          <p><strong>Versión actual:</strong> v1.0.0</p>
          <p><strong>Fecha:</strong> 2025-09-21</p>
          <p><strong>Estado:</strong> Línea base inicial</p>
        </div>

        <h2>Contribuir al proyecto</h2>
        <p>¿Quieres contribuir? ¡Excelente! Consulta nuestra <a href="/docs/contributing" style={{ color: '#0070f3' }}>guía de contribución</a>.</p>
        <h3>Proceso rápido:</h3>
        <ol>
          <li>Crear o asignarte un issue</li>
          <li>Crear rama de trabajo</li>
          <li>Desarrollar con commits descriptivos</li>
          <li>Abrir Pull Request</li>
          <li>Participar en code review</li>
        </ol>

        <h2>Tabla de versiones</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
          <thead>
            <tr style={{ backgroundColor: '#f6f8fa', borderBottom: '2px solid #e1e5e9' }}>
              <th style={{ padding: '0.5rem', textAlign: 'left', border: '1px solid #e1e5e9' }}>Versión</th>
              <th style={{ padding: '0.5rem', textAlign: 'left', border: '1px solid #e1e5e9' }}>Fecha</th>
              <th style={{ padding: '0.5rem', textAlign: 'left', border: '1px solid #e1e5e9' }}>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.5rem', border: '1px solid #e1e5e9' }}><code>v1.0.0</code></td>
              <td style={{ padding: '0.5rem', border: '1px solid #e1e5e9' }}>2025-09-21</td>
              <td style={{ padding: '0.5rem', border: '1px solid #e1e5e9' }}>Estructura inicial del proyecto</td>
            </tr>
          </tbody>
        </table>
        
        <hr style={{ margin: '2rem 0' }} />
        <footer style={{ fontSize: '0.9em', color: '#666' }}>
          <p>Esta documentación es parte de la práctica integradora de GCS.</p>
          <p><strong>Issue relacionado:</strong> #101 - Guía de contribución y tabla de versiones</p>
        </footer>
      </main>
    </>
  )
}