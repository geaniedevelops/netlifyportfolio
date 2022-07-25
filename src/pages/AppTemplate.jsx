import Navigation from "../elements/Navigation";

export default function AppTemplate(props){
    return (
        <main className={props.pageName}>
            <header>
                <Navigation />
            </header>
            {props.children}
        </main>
    );
}