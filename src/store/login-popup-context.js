const { usePopup } = require('../services/usePopup.js');

const [LoginPopupCtx, LoginPopupCtxProvider] = usePopup();

export { LoginPopupCtxProvider };

export default LoginPopupCtx;
