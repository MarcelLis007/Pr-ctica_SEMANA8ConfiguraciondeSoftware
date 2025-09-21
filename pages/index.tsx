import Head from 'next/head'
import React from 'react'

export default function Home(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Docs Proyecto Curso</title>
        <meta name="description" content="Micrositio de documentación para práctica de GCS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Docs Proyecto Curso</h1>
        <p>Micrositio de documentación para práctica de GCS (Gestión de Configuración de Software).</p>
        
        <h2>Versión actual: v1.0.0</h2>
        
        <h3>Características</h3>
        <ul>
          <li>Micrositio funcional con Next.js</li>
          <li> Documentación en formato Markdown</li>
          <li> Control de versiones con Git</li>
          <li> Versionado semántico (SemVer)</li>
        </ul>
        
        <h3>Navegación</h3>
        <ul>
          <li><a href="/docs">Documentación</a></li>
        </ul>
        
        <hr style={{ margin: '2rem 0' }} />
        <footer>
          <p>
            <strong>Repositorio:</strong> docs-proyecto-curso<br/>
            <strong>Tecnología:</strong> Next.js + TypeScript<br/>
            <strong>Práctica:</strong> GCS - Releases, trazabilidad y documentación
          </p>
        </footer>
      </main>
    </>
  )
}