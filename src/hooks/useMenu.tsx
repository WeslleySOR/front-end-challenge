import { useState } from "react";

export function useMenu() {
	const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    const handleOpenedMenu = () => {
		setIsOpenedMenu(!isOpenedMenu);
	};

    return { isOpenedMenu, handleOpenedMenu }
}