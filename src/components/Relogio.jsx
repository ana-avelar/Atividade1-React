import { useEffect, useState } from "react";

function Relogio() {
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString("pt-BR")
  );

  useEffect(() => {
    console.log("Relogio MONTADO — intervalo ligado");

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString("pt-BR"));
    }, 1000);

    return () => {
      console.log("Relogio DESMONTADO — intervalo desligado");
      clearInterval(intervalo);
    };
  }, []);

  return (
    <span className="text-sm text-slate-300 bg-slate-800 px-3 py-1 rounded-lg">
      {hora}
    </span>
  );
}

export default Relogio;