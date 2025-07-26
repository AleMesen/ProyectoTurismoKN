import React, { useEffect, useState } from "react";

interface TestComponentProps {
  setEsHumano: (valor: boolean) => void; // Prop para actualizar estado en padre
}

const TestComponent: React.FC<TestComponentProps> = ({ setEsHumano }) => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [respuesta, setRespuesta] = useState<string>("");
  const [esHumanoLocal, setEsHumanoLocal] = useState<boolean>(false); // Estado local para mostrar UI

  useEffect(() => {
    generarPregunta();
  }, []);

  const generarPregunta = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;

    setNum1(a);
    setNum2(b);
    setRespuesta("");
    setEsHumanoLocal(false);
    setEsHumano(false); // Reseteamos estado en padre también
  };

  const verificarRespuesta = () => {
    const respuestaNumero = parseInt(respuesta, 10);

    if (!isNaN(respuestaNumero) && respuestaNumero === num1 + num2) {
      setEsHumanoLocal(true);
      setEsHumano(true); // Avisamos al padre que ya pasó la verificación
    } else {
      generarPregunta();
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Verificación de humanidad</h1>
        {!esHumanoLocal ? (
          <div>
            <p className="mb-2">
              ¿Cuánto es <strong>{num1} + {num2}</strong>?
            </p>
            <input
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Tu respuesta es: "
            />
            <button
              onClick={verificarRespuesta}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Verificar
            </button>
          </div>
        ) : (
          <div className="text-green-600 font-semibold">Eres humano, adelante</div>
        )}
      </div>
    </div>
  );
};

export default TestComponent;
