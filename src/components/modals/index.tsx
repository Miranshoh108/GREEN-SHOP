import { useReduxSelector } from "../../hooks/useRedux"
import AuthorizationModal from "./authorition-modal"

const Modals = () => {
  const {modalAuthorizationVisiblty} = useReduxSelector(state => state.modalSlice)
  return (
    <>
    {modalAuthorizationVisiblty && <AuthorizationModal/>}
    </>
  )
}

export default Modals