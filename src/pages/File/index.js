import React, { useEffect, useState } from 'react';
import GlobalStyle from '../../styles/global'; 
import api from '../../services/api';
import { Helmet } from 'react-helmet';

import './file.css';

export default function File ({ match }) {
    const [ item, setItem ] = useState([]);

    useEffect(() => {
        async function loadItem() {
            const response = await api.get(`/post/${match.params.id}`);

            setItem(response.data);
        }

        loadItem();
    }, [match.params.id]);

    const title_page = `envimg - imagem: ${item.name}`;


    return (
        <div className="container">
            <div className="content">
                <img src={item.url} alt={item.name} />
                <Helmet>
                    <title>{ title_page }</title>
                </Helmet>
            </div>
            <GlobalStyle />
        </div>
    );
}
