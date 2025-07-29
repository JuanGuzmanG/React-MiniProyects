// components/CreateNewUser.tsx
import { Badge,Button, TextInput, Title } from '@tremor/react';
import { useUserActions } from '../hooks/useUserActions';   // ruta correcta
import { useState, type FormEvent } from 'react';

export function CreateNewUser() {
  const { addUser } = useUserActions();       
  const [result, setResult] = useState<"ok" | "Fields Empty" | null>(null); // Estado para manejar el resultado

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();                    

    setResult(null); // Reset result state if needed

    const form = event.currentTarget;          
    const formData = new FormData(form);

    const name   = formData.get('name')   as string;
    const email  = formData.get('email')  as string;
    const github = formData.get('github') as string;

    if (name || email || github) {
      addUser({ name, email, github });
      setResult("ok");
    } else {
      setResult("Fields Empty");
    }
    setResult("ok"); // Set result to "ok" after adding the user
    form.reset();                              
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Title>Crear nuevo usuario</Title>

      <TextInput name="name"   placeholder="Nombre"  />
      <TextInput name="email"  placeholder="Email"   />
      <TextInput name="github" placeholder="GitHub"  />

      <Button type="submit" style={{ margin: '10px' }} variant="primary">Crear</Button>
      <span>
        {result === "ok" && <Badge color="green">Usuario creado correctamente</Badge>}
        {result === "Fields Empty" && <Badge color="red">Por favor, completa todos los campos</Badge>}
      </span>
    </form>
  );
}
