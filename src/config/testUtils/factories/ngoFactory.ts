import Ngo from "types/Ngo";

function ngoFactory(params: Partial<Ngo> = {}): Ngo {
  const defaultValues: Ngo = {};
  return Object.assign(defaultValues, params) as Ngo;
}

export default ngoFactory;
