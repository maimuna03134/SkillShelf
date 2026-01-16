import LoginForm from '@/components/form/LoginForm';
import React from 'react'

export default function LoginPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === "utsho926@gmail.com" && password === "1234") {
            const currentUser = {
                email,
                name: email?.split("@")?.[0],
            };
            setUser(currentUser);
            alert("Login successful");
            router.push("/dashboard");
        } else {
            alert("Credential invalid!");
            setUser(null);
        }
    };
  return (
    <div>
      <LoginForm />
    </div>
  )
}
