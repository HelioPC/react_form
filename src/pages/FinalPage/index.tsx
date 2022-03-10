import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgNametag } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

import { useForm } from '../../contexts/FormContext';
import * as C from './style';

export const FinalPage = () => {
    const iconSize = 35;
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') history('/');
    }, [dispatch, history, state.name]);

    return(
        <C.Container>
            <C.Area>
                <C.Header>
                    <h1>
                        React-Form
                        <span>React-form</span>
                        <span>React-form</span>
                        <span>{state.name.split(' ')[0]}</span>
                    </h1>
                    <a href='/'>Sign Out</a>
                </C.Header>

                <C.Steps>
                    <C.Sidebar>
                        <div>
                            <CgNametag size={iconSize} />
                            <p>{state.name}</p>
                        </div>

                        <div>
                            <GiSkills size={iconSize} />
                            <p>{state.level === 1 ? 'Senior' : 'Junior'} Developer</p>
                        </div>

                        <div>
                            <a href={`mailto:${state.email}`} >
                                <MdOutlineMailOutline size={iconSize} />
                            </a>
                            <p>{state.email}</p>
                        </div>

                        <div>
                            <a href={state.github} target='_blank' rel="noreferrer">
                                <BsGithub size={iconSize} />
                            </a>
                            <p>{state.github.split('/')[3]}</p>
                        </div>
                    </C.Sidebar>
                    
                    <C.Page>
                        <C.Info>
                            <h1>Nome</h1>
                            <p>{state.name}</p>
                        </C.Info>
                        <C.Info>
                            <h1>Competência</h1>
                            <p>{state.level === 0 ? 'Programador há mais de ' : 'Programador há '}2 anos</p>
                        </C.Info>
                        <C.Info>
                            <h1>Contacto</h1>
                            <div>
                                <p>{state.email}</p>
                                <p>{state.github}</p>
                            </div>
                        </C.Info>
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}
