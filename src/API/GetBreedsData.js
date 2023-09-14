import { getData } from "./GetData";
export async function getBreedsData() {
  const result = await getData();
  const transformedData = await result.map((breed) => ({
    name: breed.name,
    id: breed.id,
    image: breed.image?.url || "",
    description: breed.description,
  }));
  return transformedData;
}
