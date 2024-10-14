import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface AccountInformationProps {
  admin: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phoneNumber: string;
  };
  onBack: () => void;
}

const AccountInformationPage: React.FC<AccountInformationProps> = ({ admin, onBack }) => {
  const [accountInfo, setAccountInfo] = useState({
    fechaDeEnvio: '',
    producto: '',
    empresa: '',
    nombreLegal: '',
    ruc: '',
    departamento: '',
    formaDePago: '',
    facturarEnElMes: false,
    calle: '',
    detrasCalle: '',
    ordenDeCompra: '',
    textoImpreso: '',
    contacto: '',
    email: '',
    telefono: '',
    telefono2: '',
    pais: '',
    provincia: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setAccountInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Account Information</h1>
      </div>
      <form className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de envío:</label>
            <input
              type="date"
              name="fechaDeEnvio"
              value={accountInfo.fechaDeEnvio}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Producto:</label>
            <input
              type="text"
              name="producto"
              value={accountInfo.producto}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Empresa:</label>
            <input
              type="text"
              name="empresa"
              value={accountInfo.empresa}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre legal:</label>
            <input
              type="text"
              name="nombreLegal"
              value={accountInfo.nombreLegal}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">R.U.C.:</label>
            <input
              type="text"
              name="ruc"
              value={accountInfo.ruc}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Departamento:</label>
            <input
              type="text"
              name="departamento"
              value={accountInfo.departamento}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Forma de pago:</label>
            <select
              name="formaDePago"
              value={accountInfo.formaDePago}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select</option>
              <option value="ACH">ACH</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Wire Transfer">Wire Transfer</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="facturarEnElMes"
              checked={accountInfo.facturarEnElMes}
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="facturarEnElMes" className="ml-2 block text-sm text-gray-900">
              Facturar en el mes
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Calle:</label>
            <input
              type="text"
              name="calle"
              value={accountInfo.calle}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Detras del Rey de Calle:</label>
            <input
              type="text"
              name="detrasCalle"
              value={accountInfo.detrasCalle}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Orden de compra:</label>
            <input
              type="text"
              name="ordenDeCompra"
              value={accountInfo.ordenDeCompra}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Texto impreso (vale papel):</label>
            <input
              type="text"
              name="textoImpreso"
              value={accountInfo.textoImpreso}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contacto:</label>
            <input
              type="text"
              name="contacto"
              value={accountInfo.contacto}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={accountInfo.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              value={accountInfo.telefono}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono 2:</label>
            <input
              type="tel"
              name="telefono2"
              value={accountInfo.telefono2}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">País:</label>
            <input
              type="text"
              name="pais"
              value={accountInfo.pais}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Provincia:</label>
            <input
              type="text"
              name="provincia"
              value={accountInfo.provincia}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInformationPage;