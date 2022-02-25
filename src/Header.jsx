import './Header.scss';

export default function Header(){
    return(
        <header className="header">
            <h1>Signets</h1>
            <div className="userInfo">
                <p>Antoine Ridard</p>
                <img src="images/logo.png" alt="" />
            </div>
        </header>
    )
}