import React from 'react'

export const FirstComponent = () => {
    const name = "Julian David";
  
    const github_profile = "https://github.com/julian";
  
    const student = {
      name: "Julian ",
      last_name: "David",
      mobile: "300000000",
      linkedin_profile: "https://www.linkedin.com/julian"
    };
  
    return (
      <>
        <div>MyFirstComponent</div>
        <div className="container bg-info-subtle mt-4">
          <h1>Temas de React</h1>
          <ul>
              <li>Componentes</li>
              <li>Eventos</li>
              <li>Estados Hooks</li>
              <li>Props</li>
          </ul>
        </div>
        <div className="container bg-warning-subtle py-2">
          <h1>Datos del Docente</h1>
          <p>Nombre: <strong>{ name }</strong></p>
          <p>GitHub: { github_profile } </p>
        </div>
        <div className="container bg-success-subtle py-2">
          <h1>Datos del Estudiante</h1>
          <p>Nombre: <strong>{ student.name }</strong></p>
          <p>Apellido: { student.last_name } </p>
          <p>Celular: { student.mobile } </p>
          <p>LinkedIn: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a> </p>
        </div>
        <div>
            <h1>Objeto Completo</h1>
            <pre>{JSON.stringify(student)}</pre>
        </div>
      </>
    )
}


