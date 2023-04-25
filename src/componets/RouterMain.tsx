import { createContext, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export interface Path {
	/**
	 * El path del navegador que renderizara el componente
	 */
	path: string;
	/**
	 * Alias del path
	 */
	label: string;
	/**
	 * Elemento que se renderizara
	 */
	Element: () => JSX.Element;
}

export interface Props {
	/**
	 * Un listado de paths para ser renderizados
	 */
	paths: Path[];
	/**
	 * Un Elemento hijo
	 */
	children: ReactElement | ReactElement[];
}

export interface ContextRouterProps {
	paths: Path[];
}

export const RouterContext = createContext({} as ContextRouterProps);
const { Provider } = RouterContext;

/**
 * Componente principal del router
 */
const RouterMain = ({ paths, children }: Props) => {
	return (
		<Provider value={{ paths }}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
};

export { RouterMain };
