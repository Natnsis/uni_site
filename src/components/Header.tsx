import { Button } from "./ui/button"

const Header = () => {
    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <a>Features</a>
                <a>Solutions</a>
                <a>Resources</a>
                <a>Pricing</a>
            </nav>
            <div>
                <Button>Sign in</Button>
                <Button>Get App</Button>
            </div>
        </header>
    )
}

export default Header