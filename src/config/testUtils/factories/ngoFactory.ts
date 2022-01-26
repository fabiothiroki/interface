import Ngo from "types/entities/Ngo";

function ngoFactory(params: Partial<Ngo> = {}): Ngo {
  const defaultValues: Ngo = {
    name: "Amor em patas",
    image: "https://i.imgur.com/E1GNgB8.png",
    impactDescription: "1 dia de ração para cães e gatos",
  };

  return Object.assign(defaultValues, params) as Ngo;
}

export default ngoFactory;
