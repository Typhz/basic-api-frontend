import { Header, StyledLink} from "./styles";
import { AiOutlineFileAdd } from "react-icons/ai";

export default function NavBar(){
    return(
        <Header>
            <StyledLink to="/app">
                <h2>Projetos</h2>
            </StyledLink>
            <div>
                <StyledLink to="/app/register">
                    <AiOutlineFileAdd className="icon"/>
                </StyledLink>
            </div>
        </Header>
    );
}