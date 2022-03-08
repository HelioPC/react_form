import { ReactNode } from 'react';
import { useForm } from '../../contexts/FormContext';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import * as C from './style';

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return(
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <Sidebar
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <Sidebar
                            title="Profissional"
                            description="Se identifique"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <Sidebar
                            title="Contato"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </C.Sidebar>
                    
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}
