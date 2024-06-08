import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaSpinner, FaExclamationTriangle } from 'react-icons/fa';

const BodyTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshCount, setRefreshCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('http://127.0.0.1:8000/actions');
                setData(response.data.top5);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const intervalId = setInterval(() => {
            setRefreshCount(prevCount => prevCount + 1);
        }, 11 * 60 * 1000); // 11 minutes

        return () => clearInterval(intervalId);
    }, [refreshCount]);



    return (
        <div className="flex justify-center">
            <table className="w-3/4 border rounded-lg bg-gray-100">
                <thead>
                    <tr>
                        <th className=" text-2xl lx:text-3xl font-sans w-20 h-20 hover:bg-white cursor-pointer">Top 5</th>
                        <th className=" text-2xl lx:text-3xl font-sans w-24 h-20 hover:bg-white cursor-pointer">Cours</th>
                        <th className=" text-2xl lx:text-3xl font-sans w-24 h-24 hover:bg-white cursor-pointer">Variation</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="3" className="text-center p-8">
                                <FaSpinner className="animate-spin text-4xl mx-auto" /> {/* Icône animée centrée */}
                            </td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan="3" className="text-center text-xl text-red-500 p-8">
                                <FaExclamationTriangle className="inline-block mr-2 text-3xl" /> {/* Icône d'erreur */}
                                Erreur 404 ou 500 : Ressource non trouvée. Veuillez vérifier si le serveur FastAPI est lancé.
                            </td>
                        </tr>
                    ) : (
                        data.map((elt, index) => (
                            <tr colSpan="3" key={index} className="">
                                <td className="text-center text-xl lx:text-2xl font-sans w-16 h-16 hover:bg-white cursor-pointer" >{elt.nom_societe}</td>
                                <td className="text-center text-xl lx:text-2xl font-sans w-16 h-16 hover:bg-white cursor-pointer">{elt.cours}</td>
                                <td className="text-center text-xl lx:text-2xl font-sans w-16 h-16 hover:bg-white cursor-pointer">{elt.variation}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BodyTable;
