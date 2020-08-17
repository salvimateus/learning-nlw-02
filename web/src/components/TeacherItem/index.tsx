import React from 'react';

import './styles.css'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    info: Teacher;
}

 const TeacherItem: React.FC<TeacherItemProps> = ({ info }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: info.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={info.avatar} alt={info.name}/>
                <div>
                    <strong>{info.name}</strong>
                    <span>{info.subject}</span>
                </div>
            </header>

            <p>
                {info.bio}
            </p>

            <footer>
                <p>
                    Preço por hora:
                    <strong>R$ {info.cost}</strong>
                </p>
                <a onClick={createNewConnection} href={`https://wa.me/${info.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem