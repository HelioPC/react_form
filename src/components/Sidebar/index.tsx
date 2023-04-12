import { Link } from 'react-router-dom';
import { MdPerson, MdMenuBook, MdEmail } from 'react-icons/md'
import * as C from './style';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const Sidebar = ({title, description, icon, path, active}: Props) => {
    return(
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <MdPerson fill='white' width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <MdMenuBook fill='white' width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MdEmail fill='white' width={24} height={24} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}
