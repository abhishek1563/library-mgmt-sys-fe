import AutoStoriesRounded from '@mui/icons-material/AutoStoriesRounded'

type FooterProps = {
    collegeName?: string
}

function Footer({ collegeName = 'XYZ College' }: FooterProps) {
    return (
        <footer className="site-footer">
            <div className="footer-brand">
                <span className="footer-logo" aria-hidden="true">
                    <AutoStoriesRounded />
                </span>
                <span className="footer-product">LibSphere</span>
            </div>
            <p className="footer-copyright">
                &copy; {new Date().getFullYear()} {collegeName}. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
