import { Footer } from "@designo/components/Footer/Footer";
import { Header } from "@designo/components/Header/Header";

export const Layout = ({ showProject, children }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer showProject={showProject}/>
        </>
    );
}