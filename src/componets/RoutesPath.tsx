import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { RouterContext } from "./RouterMain"

/**
 * Componente que renderiza la pagina segun el path
 */
const RoutesPath = () => {
	const { paths } = useContext(RouterContext)

	return (

		<Routes>
			{paths.map(({path, Element }) => (
				<Route key={path} path={path} element={<Element />} />
			))}

			<Route path="*" element={ <Navigate to={paths[0].path}/>} />
		</Routes>
	)
}

export { RoutesPath }
