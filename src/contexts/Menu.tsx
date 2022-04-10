import { createContext, ReactNode, useState } from "react";

type MenuContextProps = {
	children: ReactNode;
};

type MenuContextType = {
	menu: boolean;
	updateMenu: () => void;
};

export const MenuContext = createContext<MenuContextType>(
	{} as MenuContextType
);

export const MenuContextProvider = ({ children }: MenuContextProps) => {
	const [menu, setMenu] = useState(false);

	const updateMenu = () => {
		setMenu(!menu);
	};
    return (
        <MenuContext.Provider
            value={{
                menu,
                updateMenu
            }}
        >
            {children}
        </MenuContext.Provider>
    )
};
