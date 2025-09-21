import Head from 'next/head'

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentación - Docs Proyecto Curso</title>
        <meta name="description" content="Documentación del micrositio" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <a href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>← Volver al inicio</a>
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
        
        <hr />
        <footer style={{ fontSize: '0.9em', color: '#666' }}>
          <p>Esta documentación es parte de la práctica integradora de GCS.</p>
        </footer>
      </main>
    </>
  )
}