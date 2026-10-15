import { useState } from 'react'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import AutoStoriesRounded from '@mui/icons-material/AutoStoriesRounded'
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded'
import LogoutRounded from '@mui/icons-material/LogoutRounded'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import {
    Avatar,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
} from '@mui/material'

type HeaderProps = {
    collegeName?: string
    userInitial?: string
    onAccountClick?: () => void
    onSettingsClick?: () => void
    onLogout?: () => void
}

function Header({
    collegeName = 'XYZ College',
    userInitial = 'A',
    onAccountClick,
    onSettingsClick,
    onLogout,
}: HeaderProps) {
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)

    const closeMenu = () => setMenuAnchor(null)

    const handleAction = (action?: () => void) => {
        closeMenu()
        action?.()
    }

    return (
        <header className="site-header">
            <div className="header-college" aria-label={collegeName}>
                <span className="college-logo" aria-hidden="true">
                    <AutoStoriesRounded />
                </span>
                <span className="college-name">{collegeName}</span>
            </div>

            <div className="header-title">LibSphere</div>

            <div className="header-account">
                <IconButton
                    className="account-trigger"
                    aria-label="Open account menu"
                    aria-controls={menuAnchor ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={Boolean(menuAnchor)}
                    onClick={(event) => setMenuAnchor(event.currentTarget)}
                >
                    <Avatar className="account-avatar">{userInitial.slice(0, 1).toUpperCase()}</Avatar>
                    <KeyboardArrowDownRounded className="account-chevron" />
                </IconButton>
                <Menu
                    id="account-menu"
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={closeMenu}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={() => handleAction(onAccountClick)}>
                        <ListItemIcon><AccountCircleOutlined fontSize="small" /></ListItemIcon>
                        My account
                    </MenuItem>
                    <MenuItem onClick={() => handleAction(onSettingsClick)}>
                        <ListItemIcon><SettingsOutlined fontSize="small" /></ListItemIcon>
                        Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleAction(onLogout)}>
                        <ListItemIcon><LogoutRounded fontSize="small" /></ListItemIcon>
                        Log out
                    </MenuItem>
                </Menu>
            </div>
        </header>
    )
}

export default Header
