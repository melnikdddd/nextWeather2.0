import {FC} from 'react';
import Container from "@/app/components/ui/Container";
const Header:FC = () => {
    return (
        <Container>
            <header className={"h-10 flex w-full justify-between py-5"}>
                <div className={"flex-1"}>
                    <h1 className={"text-xl text-center"}>Logo</h1>
                </div>
                <button>Auth</button>
            </header>
        </Container>
    );
};

export default Header;
