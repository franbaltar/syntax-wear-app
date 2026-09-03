import { useState } from "react";
import { useCEPForm } from "./cep-form.schema";
import type { Address } from "../../interfaces/address";
import { currencyFormat } from "../../utils/currency-format";

const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 24.9,
  Sudeste: 14.9,
  Sul: 19.9,
};

export const CEPForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useCEPForm();
  const [address, setAddress] = useState<Address | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const onSubmit = async ({ cep }: { cep: string }) => {
    setAddressError(null);
    setAddress(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      console.log("data.erro", data.erro);

      if (data.erro) {
        setAddressError("CEP não encontrado.");
        return;
      }

      const shippingCost = SHIPPING_BY_REGION[data.regiao];

      if (!shippingCost) {
        setAddressError("Região não suportada para entrega.");
        return;
      }

      console.log(data.regiao);
      console.log(shippingCost);

      setAddress({ ...data, shippingCost: shippingCost });
    } catch {
      setAddressError(
        "Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.",
      );
    }
  };

  return (
    <>
      <form
        className="flex items-start gap-3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col flex-1">
          <input
            type="text"
            placeholder="Insira seu CEP"
            className={`cep-input border border-border rouded-md p-3 ${errors.cep ? "text-error" : ""}`}
            {...register("cep")}
          />
          {errors.cep && (
            <span className="text-error text-sm mt-1">
              {String(errors.cep.message)}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Calculando..." : "Calcular"}
        </button>
      </form>

      {addressError && (
        <div className="mt-4">
          <p className="text-error text-sm ">{addressError}</p>
        </div>
      )}

      {address && (
        <div className="mt-4">
          <p>
            <strong>Região:</strong> {address.regiao}
          </p>
          <p>
            <strong>Custo de entrega:</strong>{" "}
            {currencyFormat(address.shippingCost)}
          </p>
        </div>
      )}
    </>
  );
};
