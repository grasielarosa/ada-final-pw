import React, { FC, FormEvent, useState } from 'react';
// // import { signup } from './api';

// const defaultValues = {
//   name: '',
//   email: '',
//   password: '',
//   birthdate: '',
//   sessionToken: '',
// };

const SignUp: FC = () => {
  //   const [inputs, setInputs] = useState(defaultValues);

  //   const handleSubmit = (e: FormEvent<HTMLElement>) => {
  //     e.preventDefault();
  //     // signup({ ...inputs, birthdate: new Date(inputs.birthdate) });
  //   };
  return <div>teste</div>;
  //     <form action="" onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="name">
  //           Nombre y apellido:
  //           <input
  //             id="name"
  //             type="text"
  //             name="name"
  //             value={inputs.name}
  //             onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
  //           />
  //         </label>
  //       </div>
  //       <div>
  //         <label htmlFor="email">
  //           E-mail:
  //           <input
  //             id="email"
  //             type="text"
  //             name="email"
  //             value={inputs.email}
  //             onChange={(e) =>
  //               setInputs((prevState) => ({
  //                 ...prevState,
  //                 email: e.target.value,
  //               }))
  //             }
  //           />
  //         </label>
  //       </div>
  //       <div>
  //         <label htmlFor="password">
  //           Contraseña
  //           <input
  //             id="password"
  //             type="password"
  //             name="password"
  //             value={inputs.password}
  //             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
  //           />
  //         </label>
  //       </div>
  //       <div>
  //         <label htmlFor="birthdate">
  //           Fecha de nacimiento:
  //           <input
  //             id="birthdate"
  //             type="date"
  //             name="birthdate"
  //             value={inputs.birthdate}
  //             onChange={(e) =>
  //               setInputs({ ...inputs, birthdate: e.target.value })
  //             }
  //           />
  //         </label>
  //       </div>
  //       <button type="submit">Crear usuário</button>
  //     </form>
};

export { SignUp };
