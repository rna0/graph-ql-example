import {useQuery} from "@apollo/client";
import {GET_CHARACTERS} from "./Query/GetCharacters.ts";

export interface ICharacter {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
    checked: boolean;
}

export const DisplayLocations = () => {
    const {loading, data} = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>;

    return (
        <div className='h-[calc(100vh-120px)] max-h-[800px] overflow-scroll bg-gray-800'>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>status</th>
                    <th>species</th>
                    <th>type</th>
                    <th>gender</th>
                    <th>image</th>
                    <th>created</th>
                </tr>
                </thead>
                <tbody>
                {data && data.characters?.results.map(model => (
                    <tr key={model?.id}>
                        <td>{model?.id}</td>
                        <td>{model?.name}</td>
                        <td>{model?.status}</td>
                        <td>{model?.species}</td>
                        <td>{model?.type}</td>
                        <td>{model?.gender}</td>
                        <td>{model?.image && <img src={model.image} alt={"characterImage"}/>}</td>
                        <td>{model?.created}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}